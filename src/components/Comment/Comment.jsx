import React from 'react';
import VoteButton from './VoteButton/VoteButton';

import './comment.scss';

function Comment() {
  return (
    <div className="comment">
      <section className="comment__upvote">
        <VoteButton />
      </section>
      <section className="comment__header">
        <p>Nome do usuário</p>
      </section>
      <section className="comment__body">
        <p>comentario</p>
      </section>
    </div>
  );
}

export default Comment;
