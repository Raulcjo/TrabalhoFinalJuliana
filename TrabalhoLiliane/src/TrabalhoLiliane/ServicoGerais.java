package TrabalhoLiliane;

public class ServicoGerais extends Servicos{
	private double valorPorHoras;
	private String tipoServico;
	private int horasTrabalhadas;
	
	public ServicoGerais() {
		
	}
	
	public ServicoGerais(double valorPorHoras, String tipoServico, int horasTrabalhadas) {
		this.valorPorHoras = valorPorHoras;
		this.tipoServico = tipoServico;
		this.horasTrabalhadas = horasTrabalhadas;
	}

	public double getValorPorHoras() {
		return valorPorHoras;
	}

	public void setValorPorHoras(double valorPorHoras) {
		this.valorPorHoras = valorPorHoras;
	}

	public String getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(String tipoServico) {
		this.tipoServico = tipoServico;
	}

	public int getHorasTrabalhadas() {
		return horasTrabalhadas;
	}

	public void setHorasTrabalhadas(int horasTrabalhadas) {
		this.horasTrabalhadas = horasTrabalhadas;
	}
	
	public double calcularServico() {
		return valorPorHoras*horasTrabalhadas;
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
		return "\nValor por Horas: " + valorPorHoras +
				"\nTipo de Serviço: " + tipoServico +
				"\nHoras Trabalhadas: " + horasTrabalhadas;
	}
	
}
