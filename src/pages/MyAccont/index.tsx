export default function MyAccount() {
  return (
    <section className="max-w-xl space-y-6">

      <h2 className="text-xl font-semibold text-[var(--color-primary)]">Minha conta</h2>

      <div className="glass-card p-6 space-y-4">
        <input className="input-auth" placeholder="Nome" />
        <input className="input-auth" placeholder="E-mail" />

        <button className="btn-auth">
          Salvar alterações
        </button>
      </div>

      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold">Segurança</h2>

        <input className="input-auth" placeholder="Nova senha" />
        <button className="btn-auth">
          Alterar senha
        </button>
      </div>

    </section>
  );
}