import "../chamados/style.css";

import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";

import swal from "sweetalert2";
import { GlobalContext } from "../../global/GlobalContext";

const Chamados = () => {
  const [form, SetForm] = useState(false);
  const [btnVoltar, SetBtnVoltar] = useState("Novo Chamado");
  const [dadosParaEdit, setDadosParaEdit] = useState();

  const { chamados, setChamados } = useContext(GlobalContext);

  const generateId = uuidv4();

  /* CÓDIGO USADO PARA MOSTRAR O FORM DE CADASTRAR CHAMADOS */

  const mostrarFormChamados = () => {
    const formChamados = document.querySelector(".cadastrar-chamados");
    const pesquisarChamados = document.querySelector(
      ".sessao-pesquisar-chamados"
    );
    const tblChamados = document.querySelector(".tbl-chamados");

    if (form === false) {
      formChamados.style.cssText = "display: block;";
      pesquisarChamados.style.cssText = "display: none;";
      tblChamados.style.cssText = "display: none;";

      SetForm(true);
      SetBtnVoltar("Voltar");
    } else if (form === true) {
      formChamados.style.cssText = "display:none;";
      pesquisarChamados.style.cssText = "display: block;";
      tblChamados.style.cssText = "display: block;";

      SetForm(false);
      SetBtnVoltar("Novo Chamado");
    }
  };

  /* CÓDIGO USADO PARA CADASTRAR UM NOVO CHAMADO */

  const formik = useFormik({
    initialValues: {
      cliente: "",
      titulo: "",
      dataChamado: "",
      status: "",
      tipoDeChamado: "",
      mensagem: "",
    },
    onSubmit: (values, { resetForm }) => {
      swal.fire({
        position: "center",
        icon: "success",
        title: "Chamado Cadastrado!",
        showConfirmButton: false,
        timer: 1500,
      });
      const dadosChamados = {
        clienteCM: values.cliente,
        tituloCM: values.titulo,
        dataChamadoCM: values.dataChamado,
        idCM: generateId,
        statusCM: values.status,
        tipoDeChamadoCM: values.tipoDeChamado,
        mensagemCM: values.mensagem,
      };
      setChamados(() => [...chamados, dadosChamados]);
      resetForm({ values: "" });
    },
  });

  /* CONTEÚDO MODAL ABAIXO */

  const pegaDadosDoChamado = (dadosDoChamado) => {
    setDadosParaEdit(dadosDoChamado)

    return dadosParaEdit
  }

  const abreModal = (dados) => {
    const modalA = document.querySelector(".modal-edita-chamados");
    modalA.style.cssText = "display:block;"

    const dadosObj = dados;

    pegaDadosDoChamado(dadosObj)
  }

  const formikModal = useFormik({
    initialValues: {
      idModal:"",
      clienteModal:"",
      tituloModal:"",
      dataChamadoModal:"",
      statusModal:"",
      tipoDeChamadoModal:""
    },
    onSubmit: (values, {resetForm}) => {
      const dadosChamado = pegaDadosDoChamado()

      chamados.filter((item) => {
        if(item.idCM === dadosChamado.idCM){

          dadosChamado.clienteCM = values.clienteModal
          dadosChamado.tituloCM = values.tituloModal
          dadosChamado.dataChamadoCM = values.dataChamadoModal
          dadosChamado.statusCM = values.statusModal
          dadosChamado.tipoDeChamadoCM = values.tipoDeChamadoModal

        }
      })

      swal.fire({
        position: "center",
        icon: "success",
        title: "Chamado Alterado!",
        showConfirmButton: false,
        timer: 1500,
      });

      resetForm({values:""})
      fechaModal()
    }
  })

  const fechaModal = () => {
    const modalF = document.querySelector(".modal-edita-chamados");
    modalF.style.cssText = "display:none;"
  }

  return (
    <div id="sessao-chamados">
      <h3 className="titulo-chamados">
        <span className="subtitulo-chamados">Chamados</span>
      </h3>
      <button
        className="btn-novo-chamado"
        onClick={() => {
          mostrarFormChamados();
        }}
      >
        {btnVoltar}
      </button>
      <section className="sessao-pesquisar-chamados">
        <section className="sessao-pesquisar-chamados">
          <label className="lbl-chamados">ID do chamado</label>
          <div className="pesquisar-chamado">
            <input
              className="buscar-chamados"
              type="text"
              placeholder="Informe o ID do chamado"
            />
            <button className="btn-pesquisar-chamado">Pesquisar</button>
          </div>
        </section>
      </section>
      <form className="cadastrar-chamados" onSubmit={formik.handleSubmit}>
        <div className="primeiro-container-chamados">
          <div className="container-chamados">
            <label className="lbl-chamados">Cliente</label>
            <input
              className="ipt-chamados-cliente"
              type="text"
              name="cliente"
              value={formik.values.cliente}
              onChange={formik.handleChange}
              placeholder="Informe o Cliente"
              required
            />
          </div>
          <div className="container-chamados">
            <label className="lbl-chamados">Titulo do chamado</label>
            <input
              className="ipt-chamados-info"
              type="text"
              name="titulo"
              value={formik.values.titulo}
              onChange={formik.handleChange}
              placeholder="Informe um titulo"
              required
            />
          </div>
        </div>
        <div className="segundo-container-chamados">
          <div className="container-chamados">
            <label className="lbl-chamados">Data do chamado</label>
            <input
              className="ipt-chamados-info"
              type="date"
              name="dataChamado"
              value={formik.values.dataChamado}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div className="container-id-chamados">
            <label className="lbl-id-chamados">ID do chamado:</label>
            <span className="id-gerado-chamados">
              seu ID será mostrado na tela de chamados ao terminar o cadastro...
            </span>
          </div>
        </div>
        <div className="terceiro-container-chamados">
          <div className="container-chamados">
            <label className="lbl-chamados">Status</label>
            <select
              className="slct-chamados"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              required
            >
              <option value="Ativo">ativo</option>
              <option value="Inativo">inativo</option>
              <option value="Em espera">em espera</option>
            </select>
          </div>
          <div className="container-chamados">
            <label className="lbl-chamados">Tipo de Chamado</label>
            <select
              className="slct-chamados"
              name="tipoDeChamado"
              value={formik.values.tipoDeChamado}
              onChange={formik.handleChange}
              required
            >
              <option value="Sem pressa">Sem pressa</option>
              <option value="Rápido">Rápido</option>
              <option value="Urgente">Urgente</option>
            </select>
          </div>
        </div>
        <div className="quarto-container-chamados">
          <div className="container-chamados">
            <label className="lbl-chamados">Descriçao do chamado</label>
            <textarea
              className="txtarea-chamados"
              cols="30"
              rows="10"
              name="mensagem"
              value={formik.values.mensagem}
              onChange={formik.handleChange}
              placeholder="Sua mensagem"
              required
            ></textarea>
          </div>
          <button className="btn-cadastrar-chamado" type="submit">
            Cadastrar chamado
          </button>
        </div>
      </form>
      <section className="sessao-tbl-chamados">
        <table className="tbl-chamados">
          <thead>
            <tr className="dados-chamados">
              <th>ID</th>
              <th>Cliente</th>
              <th>Titulo</th>
              <th>Data do Chamado</th>
              <th>Status</th>
              <th>Tipo de Chamado</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {chamados.map((item, index) => {
              return (
                <tr key={index} className="chamados-cadastrados">
                  <td>{item.idCM}</td>
                  <td>{item.clienteCM}</td>
                  <td>{item.tituloCM}</td>
                  <td>{item.dataChamadoCM}</td>
                  <td>{item.statusCM}</td>
                  <td>{item.tipoDeChamadoCM}</td>
                  <td>
                    <button
                      className="btn-edit-chamado"
                      onClick={() => abreModal(item)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>


      <section className="modal-edita-chamados">
            <div className="titulo-exit">
                <h4>Atualizar Chamado</h4>
                <button className="exit-modal-chamados" onClick={() => fechaModal()}>X</button>
            </div>
            <form className="form-modal-chamados" onSubmit={formikModal.handleSubmit}>
                <div className="box-modal-chamados">
                    <label className="lbl-modal-chamados">ID</label>
                    <input 
                        className="ipt-modal-chamados ipt-modal-disabled"
                        type="text"
                        name="idModal"
                        value={formikModal.values.idModal}
                        onChange={formikModal.handleChange}
                        placeholder="Não é possível alterar o ID gerado."
                        disabled
                    />
                </div>
                <div className="box-modal-chamados">
                    <label className="lbl-modal-chamados">Cliente</label>
                    <input 
                        className="ipt-modal-chamados"
                        type="text"
                        name="clienteModal"
                        value={formikModal.values.clienteModal}
                        onChange={formikModal.handleChange}
                        required
                    />
                </div>
                <div className="box-modal-chamados">
                    <label className="lbl-modal-chamados">Titulo</label>
                    <input
                        className="ipt-modal-chamados" 
                        type="text"
                        name="tituloModal"
                        value={formikModal.values.tituloModal}
                        onChange={formikModal.handleChange}
                        required
                    />
                </div>
                <div className="container-modal">
                    <div className="box-modal-chamados">
                        <label className="lbl-modal-chamados">Data do Chamado</label>
                        <input
                            className="ipt-modal-date"
                            type="date"
                            name="dataChamadoModal"
                            value={formikModal.values.dataChamadoModal}
                            onChange={formikModal.handleChange}
                            required
                        />
                    </div>
                    <div className="box-modal-chamados">
                        <label className="lbl-modal-chamados">Status</label>
                        <select 
                          className="selct-modal-chamados"
                          name="statusModal"
                          value={formikModal.values.statusModal}
                          onChange={formikModal.handleChange}
                          >
                            <option value="Ativo">Ativo</option>
                            <option value="Em espera">Em espera</option>
                            <option value="Inativo">Inativo</option>
                        </select>
                    </div>
                </div>
                <div className="box-modal-chamados">
                    <label className="lbl-modal-chamados">Tipo de Chamado</label>
                    <select 
                      className="selct-tipo-chamados"
                      name="tipoDeChamadoModal"
                      value={formikModal.values.tipoDeChamadoModal}
                      onChange={formikModal.handleChange} 
                    >
                      <option value="Sem pressa">Sem pressa</option>
                      <option value="Rapido">Rápido</option>
                      <option value="Urgente">Urgente</option>
                    </select>
                </div>
                <div className="btn-submit-cancel">
                    <button type="button" className="btn-cancel-modal" onClick={() => fechaModal()}>Cancelar</button>
                    <button 
                      type="submit" 
                      className="btn-submit-modal"
                    >Salvar</button>
                </div>
            </form>
      </section>
    </div>
  );
};
export default Chamados;
