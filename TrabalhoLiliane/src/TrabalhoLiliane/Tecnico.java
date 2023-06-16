package TrabalhoLiliane;

public class Tecnico extends Pessoa {
	private int credencial;
	private String tipoServico;
	
	public Tecnico() {
		
	}
	
	public Tecnico(String nome, String cpf, String telefone, String email, int credencial, String tipoServico) {
		super(nome, cpf, telefone, email);
		this.credencial = credencial;
		this.tipoServico = tipoServico;
	}

	public int getCredencial() {
		return credencial;
	}

	public void setCredencial(int credencial) {
		this.credencial = credencial;
	}

	public String getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(String tipoServico) {
		this.tipoServico = tipoServico;
	}
	
	public String toString() {
		return super.toString() + "\nCredencial: " + credencial +
								"\nTipo de Serviço: " + tipoServico;
	}
}
