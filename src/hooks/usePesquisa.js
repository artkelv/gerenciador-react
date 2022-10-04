import { useEffect } from "react";

const usePesquisa = (itemBuscado, estadoDoComponente, setRetornarDados) => {
    //RESPONSAVEL POR COMPARAR O ESTADO GLOBAL DO COMPONENTE E O QUE FOI COLOCADO NO INPUT DE PESQUISA.
    const encontraPesquisa = (dados) => {
        return dados.idCm === itemBuscado
    }
    //AQUI ELE TENTA ENCONTRAR O QUE ESTA SENDO DIGITADO, SE ENCONTRAR DEVOLVE UM OBJETTO SE NÃO, UM UNDEFINED.
    const comparaPesquisa = estadoDoComponente.find(encontraPesquisa)
    
    //AQUI ALTERAMOS O ESTADO, QUE AO CLICAR E TIVERMOS O TEM ELE RENDERIZA LA EMBAIXO, MAS SE NÃO TIVER RENDERIZA OUTRA COISA.
    const clickAtendimento = () => {
        if(comparaPesquisa){
            setRetornarDados(true)
        }else{
            setRetornarDados(false)
        }
    }
    //AQUI O USEEFFECT FICA OLHANDO A TODO TEMPO PARA O STATE, SE ALGO ACONTECER COM ELA ELE ACIONA O FUNÇÃO
    const effectPesquisa = useEffect(() => {
        if(!comparaPesquisa){
            setRetornarDados(false)
        }
    }, [comparaPesquisa])

    return [encontraPesquisa, comparaPesquisa, clickAtendimento, effectPesquisa]
}
export default usePesquisa
