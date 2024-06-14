import React from 'react';
import './CSS/ArticleCard.css';

const ArticleCard = ({ article }) => (
  <>
    <div className="height d-flex justify-content-center align-items-center" style={{ marginTop: '5%' }}>
      <div className="card p-3" style={{ maxHeight: '300px', minHeight: '300px', maxWidth: '400px', minWidth: '400px', borderBlockColor: '#ff6600', borderBlockStartWidth: '10px' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="mt-2">
            <div className="mt-5">
              <h1 className="main-heading mt-0">{article?.name}</h1>
              <h4 style={{ color: 'black' }}>{article?.prix}</h4>
            </div>
          </div>
          <div className="image_article">
            <img style={{ maxHeight: '150px', minHeight: '150px', maxWidth: '150px', minWidth: '150px' }} src={article?.image} width="200" alt="Article" />
          </div>
        </div>
        <p style={{ color: 'black', marginTop: '5%' }}>{article?.description}</p>
        <button style={{ backgroundColor: '#ff6600', border: 'none', marginTop: '10%', fontWeight: 'bolder' }} className="btn btn-danger">Ajouter au panier</button>
      </div>
    </div>
  </>
);

export default ArticleCard;
