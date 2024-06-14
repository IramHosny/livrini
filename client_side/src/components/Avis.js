import React, { useState } from 'react';
import AddComment from './AddComment';

const Avis = ({ comments }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button style={styles.button} onClick={handleShow}>
        Ajouter un avis
      </button>

      {show && <AddComment onClose={handleClose} />}

      <h2 style={styles.title}>Avis des utilisateurs</h2>
      <div style={styles.commentsContainer}>
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} style={styles.comment}>
              <h4>{comment.user_name} ({comment.note}/5)</h4>
              <p>{comment.contenu}</p>
            </div>
          ))
        ) : (
          <p>Aucun avis pour le moment.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  button: {
    background: '#f15d00',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  title: {
    textAlign: 'center',
    color: '#f15d00',
    marginTop: '20px',
  },
  commentsContainer: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  comment: {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
};

export default Avis;
