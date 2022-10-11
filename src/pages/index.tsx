import type { NextPage } from 'next'
import styles from '../styles/home.module.scss'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você para outro nível!</h1>
            <span>Uma plataforma com cursos que vão do zero até o profissional na prática, direto ao ponto aplicando o que usamos no mercado de trabalho. 👊 </span>
            <a>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>
          </section>

          <img src="/images/banner-conteudos.png" alt="Conteúdos" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e iOS</h2>
            <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para iOS e Android, construindo aplicativos do zero até aplicativos.</span>
          </section>

          <img src='/images/financasApp.png' alt='Conteúdos desenvolvimento de apps' />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src='/images/webDev.png' alt='Conteúdos desenvolvimento de aplicacoes web' />

          <section>
            <h2>Aprenda a criar sistemas Web</h2>
            <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
          </section>
        </div>

      </main>
    </>
  )
}

export default Home
