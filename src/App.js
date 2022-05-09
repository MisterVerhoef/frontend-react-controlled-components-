import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [commentValue, setCommentValue] = React.useState('');
    const [newsletterValue, setNewsletterValue] = React.useState(false);
    const [submitValue, setSubmitValue] = React.useState('');
    function handleSubmit(){
        console.log("formulier ingediend")
    }


  return (
    <div>
        <form onSubmit={handleSubmit} >
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor="full-name-field">Naam:
                    <input
                        type="text"
                        id="full-name-field"
                        name="full-name-field"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}

                    />
                </label>
                <br/>
                <br/>
                <label htmlFor="age"> Leeftijd:
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={ageValue}
                        onChange={(e) => setAgeValue(e.target.value)}
                    />
                </label>
            </fieldset>
            <br/>
            <fieldset>
                <legend>Jouw review</legend>
                <br/>
                <label htmlFor="comments"> Opmerkingen:
                    <br/>
                    <textarea
                        name="comments"
                        id="comments"
                        cols="50"
                        rows="5"
                        value={commentValue}
                        onChange={(e) => setCommentValue(e.target.value)}
                              placeholder="Wat vond je van het recept?"></textarea>
                </label>
                <br/>
                <br/>
                <label htmlFor="newsletter">
                    <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter-acceptance"
                        value={newsletterValue}
                        onChange={(e) => setNewsletterValue(!newsletterValue)}
                    />

                    Schrijf me in voor de nieuwsbrief
                </label>
                <br/>
                <br/>
                <button
                    disabled={!nameValue && !ageValue}
                    type="submit"
                    value={submitValue}
                    onChange={(e) => setSubmitValue(e.target.value)}

                >
                    Versturen</button>
            </fieldset>
        </form>
    </div>
  );
}

export default App;
