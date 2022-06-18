import styles from './styles.module.css'

export const Botao = () => {
  return (
    <div className={styles.square}>
      <button className={styles.btn}>Texto Qualquer</button>
      <legend className={styles.legend}>Legenda</legend>
    </div>
  )
}