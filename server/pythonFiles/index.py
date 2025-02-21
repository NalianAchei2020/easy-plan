from flask import Flask, jsonify, request
from transformers import pipeline

app = Flask(__name__)

@app.route('/', methods=['GET'])
def default_url():
    return jsonify({'message': 'Welcome to AI API'})

@app.route('/generate', methods=['POST'])
def generate_text():
    # Get the input message from the request
    user_message = request.json.get('message', 'What is the capital of USA')

    # Create a pipeline for text generation
    pipe = pipeline("text-generation", model="deepseek-ai/DeepSeek-V3", trust_remote_code=True)

    # Generate text based on the user's message
    response = pipe(user_message, max_length=50)

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)