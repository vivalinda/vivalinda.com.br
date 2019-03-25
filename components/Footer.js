const Footer = () => {
  return (
    <>
      <div className="footer">
          <a className='icons' href="https://www.instagram.com/vivalindaoficial">
            <img  alt="Instagram" src={ require("../static/insta.svg") } />
          </a>
          <a className='icons' href="https://www.facebook.com/vivalindaoficial">
            <img alt="Facebook" src={require("../static/face.svg")} />
          </a>
          <a className='icons' href="mailto:contato@vivalinda.com.br">
            <img alt="Email" src={ require("../static/mail.svg" ) } />
          </a>
      </div>
        <div className="footerNote">
          <p>©2019 - VIVALINDA- Todos os Direitos Reservados</p>
        </div>
        <style global jsx>{`
        .icons {
          width: calc(30px + 1%);
          margin-left: auto;
          margin-right: auto;
          cursor: pointer;
          -webkit-user-select: none;
        }
        .footer {
          margin-top: 2%;
          margin-bottom: 2%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footerNote {
          background-color: #c3ad6c;
          text-align: center;
          vertical-align: middle;
          width:100%;
          margin-top: calc(20px + 1%);
          margin-bottom: 1.5%;
          /*font-family: Helvetica, sans-serif;*/
        }
        `}</style>
      </>
  )
}

export default Footer