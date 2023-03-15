import requests
from flask import Flask, session, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# @app.route('/')
# def default():
#     if "username" in session:
#         return redirect(url_for('home'))
#     return redirect(url_for('login'))

@app.route('/test')
def test():
    #dictionary gets turned into JSON by FLask so no need to JSONify
    response_body = {
        "test": "this is a test",
        "readable" :"If you can see this then you have fetched data"
    }

    return response_body

@app.route('/trivia')
def get_trivia():
    # Make a GET request to the Open Trivia Database API to get a random trivia question
    response = requests.get('https://opentdb.com/api.php?amount=1&type=multiple')

    if response.status_code == 200:
        # Extract the trivia question and answer from the API response
        result = response.json()['results'][0]
        print(result)
        question = result['question']
        correct_answer = result['correct_answer']
        choices = result['incorrect_answers']
        print(choices)

        # Return the question and answer as JSON
        return jsonify({'question': question, 'answer': correct_answer, 'choices': choices})
    else:
        # Return an error message if the API request failed
        return jsonify({'error': 'Failed to get trivia question.'}), 500


if __name__ == '__main__':
    app.run(debug=True)