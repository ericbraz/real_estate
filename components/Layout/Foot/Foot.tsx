import React from 'react'
import LogoComponent from '../../LogoComponent'
import Newsletter from '../../Newsletter/Newsletter'
import styles from './Footer.module.scss'
import FooterContent from './FooterContent'

function Foot() {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <div>
               <div className={styles.logo}>
                  <LogoComponent tag={'h4'} text={true} logoSize={30} />
                  <p>lacus vestibulum sed arcu non odio euismod lacinia</p>
                  <p>ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus</p>
                  <Newsletter inputText='Insert your best e-mail' />
               </div>
               <FooterContent styles={styles.listing} />
               <div className={styles.contact}>
                  <h4>
                     Contato: <i>fictitious</i>
                  </h4>
                  <p>Telefone: (61) 3373-5060</p>
                  <address>
                     <p>SEPN 516, Conj D, Lote 09</p>
                     <p>Edifício Via Universitas - 4º Andar</p>
                     <p>Asa Norte, Brasília - DF</p>
                     <p>CEP: 70770-524</p>
                  </address>
               </div>
            </div>
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
