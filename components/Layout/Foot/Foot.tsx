import React from 'react'
import styles from './Footer.module.scss'

function Foot() {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <p>
               <div className={styles.logo}>
                  <h4>Logo component here</h4>
                  <p>lacus vestibulum sed arcu non odio euismod lacinia</p>
                  <p>ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus</p>
               </div>
               <div>
                  <h4>Apenas um teste</h4>
                  <ul>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                  </ul>
               </div>
               <div>
                  <h4>Apenas um teste</h4>
                  <ul>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                  </ul>
               </div>
               <div>
                  <h4>Apenas um teste</h4>
                  <ul>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                     <li>Apenas teste</li>
                  </ul>
               </div>
            </p>
         </div>
         <div className={styles.copyright}>
            <p className={styles.copyrightText}>&copy; 2022 AEJ Incorporadora</p>
            <p className={styles.terms}>
               <span>Termos e Condições</span>&nbsp;&#183;&nbsp;
               <span>Política de Privacidade</span>
            </p>
         </div>
      </footer>
   )
}

export default Foot
