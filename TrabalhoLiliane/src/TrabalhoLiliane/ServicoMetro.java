package TrabalhoLiliane;

public class ServicoMetro extends Servicos{
	private double metrosQuadrado;
	private double valorMetro;
	private String tipoServicos;
	
	public ServicoMetro() {
		
	}
	
	public ServicoMetro(double metrosQuadrado, double valorMetro, String tipoServicos) {
		this.metrosQuadrado = metrosQuadrado;
		this.valorMetro = valorMetro;
		this.tipoServicos = tipoServicos;
	}

	public double getMetrosQuadrado() {
		return metrosQuadrado;
	}

	public void setMetrosQuadrado(double metrosQuadrado) {
		this.metrosQuadrado = metrosQuadrado;
	}

	public double getValorMetro() {
		return valorMetro;
	}

	public void setValorMetro(double valorMetro) {
		this.valorMetro = valorMetro;
	}

	public String getTipoServicos() {
		return tipoServicos;
	}

	public void setTipoServicos(String tipoServicos) {
		this.tipoServicos = tipoServicos;
	}
	
	public double calcularServico() {
		return metrosQuadrado*valorMetro;
	}
	
	public void adicionarServico() {
	
	}
	
	public void excluirServico() {
		
	}
	
	public void editarServico() {
		
	}
	
	public void exibirServico() {
		
	}
	
	public String toString() {
		return "\nMetros quadrado: " + metrosQuadrado +
				"\nValor por Metros: " + valorMetro +
				"\nTipo de Serviço: " + tipoServicos;
	}
}
