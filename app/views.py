from app import app
from flask import render_template

@app.route('/')
def homepage():
	return render_template('index.html')

@app.route('/resume/')
def resumepage():
	return render_template('resume.html')