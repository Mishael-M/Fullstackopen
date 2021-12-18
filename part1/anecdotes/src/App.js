import React, { useState } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const changeQuote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteQuote = () => {
    console.log(selected);
    let newArray = [...vote];
    newArray[selected] += 1;
    setVote(newArray);
  };

  return (
    <div>
      <Header title='Anecdote of the day' />
      {anecdotes[selected]}
      <br />
      <p>This quote has {vote[selected]} votes</p>
      <Button handleClick={voteQuote} text='Vote for this Quote' />
      <Button handleClick={changeQuote} text='Press me to change the quote!' />
      <Header title='Anecdote with most upvotes' />
      {anecdotes[vote.indexOf(Math.max(...vote))]}
      <p>This quote has {Math.max(...vote)} votes</p>
    </div>
  );
};

export default App;
