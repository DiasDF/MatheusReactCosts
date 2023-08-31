import styles from './container.module.css'

function Container(props) {
   return (
      <div className={`${styles.container} ${styles[props.customClass]}`}>
         {props.children}
      </div>
   )
}
/*
${styles.container} Adiciona (VIA JS) Classes que vem do Container e
${styles[props.customClass]} Adiciona [ ] arrays (VIA JS), Classes que vem por PROPS
*/
export default Container
