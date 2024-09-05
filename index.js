import { func } from 'prop-types';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;

const reverseSentence = (sentence) => {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

const sentence = 'Type your sentence here';
const reversedSentence = reverseSentence(sentence);
console.log(reversedSentence);

// take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript
  function reverseSentence(sentence) {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
  }

  
  const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const filteredData = data.filter((group) => group.length > 1);
console.log(filteredData);

const names = data.flatMap(group => group.map(obj => obj.name));
console.log(names);

