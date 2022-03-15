/_ MAIN CONHECIMENTOS ======================= _/

.conhecimentos_container {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
padding-top: 50px;
padding-bottom: 80px;
justify-items: center;
}

#conhecimentos {
padding: 100px 75px;
background: var(--background-light);
}

.conhecimentos_pont {
color: var(--letter-color-atention);
font-size: 5rem;
}

@media screen and (max-width: 1024px) {
main #conhecimentos {
padding: 75px 20px 100px 20px;
}
}

main #conhecimentos .larguraContainer > div {
display: flex;
justify-content: space-between;
height: auto;
flex-wrap: wrap;

div,
article {
width: 50%;
}

#cards-conhecimentos {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
flex-wrap: wrap;
gap: 20px;

    article {
      &:hover {
        .cards-nomes,
        .cards-nomes-baixo {
          display: block;
          text-align: center;
        }

        border: 3px solid #17161d;
        border-image: linear-gradient(
            225deg,
            var(--color-base-two) 20%,
            var(--second-color) 80%
          )
          1;
      }

      width: 20%;
      flex-grow: 1;
      height: 130px;
      background: rgba(196, 196, 196, 0.07);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .aumento-hover {
        bottom: -75px;
      }

      .icon-conhecimentos {
        width: 60px;
      }
    }

}

#texto-conhecimentos {
height: 300px;

    h2 {
      margin-bottom: 30px;
      color: var(--text-color);
      font-size: 3.2rem;
      font-weight: 500;
    }

    p {
      font-size: 1.8rem;
      max-width: 500px;
      line-height: 32px;
      color: var(--text-color);
    }

}
}

@media screen and (max-width: 1124px) {
main #conhecimentos .larguraContainer > div {
div,
article {
width: 100%;
}
}
}

@media screen and (max-width: 1124px) {
main #conhecimentos .larguraContainer > div #cards-conhecimentos {
margin-top: 50px;
}
}

@media screen and (max-width: 768px) {
main #conhecimentos .larguraContainer > div #cards-conhecimentos article {
width: 40%;
margin: 20px 0px;
}
}
