import darthError from '../../../assets/images/elements/error.png';
import bgError from '../../../assets/images/background/bg3.jpg';

let Error404 = {
  is_private: false,
  render: async () => {
    let view = `${error}`;
    return view;
  },

  after_render: () => {
    console.log('Try another one... :)');
  },
};

let error = `
<section id="error" class="section background--error" style="background-image: url(${bgError})">
  <div class="container block-section--one">
    <h1>ATENÇÃO</h1>
    <h2>A Página solicitada não existe! Tente uma nova busca</h2>
    <img src=${darthError} alt="Erro 404 - Página não encontrada" width="300px" height="auto">
  </div>
</section>
`;

export default Error404;
