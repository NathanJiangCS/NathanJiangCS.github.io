from app import app
from flask import render_template, request

@app.route('/')
def homepage():
	return render_template('index.html')

@app.route('/', methods=['POST'])
def homepage_post():
	email = request.form['email']
	message = request.form['message']

	print email, message
	return render_template('index.html')

@app.route('/resume/')
def resumepage():
	return render_template('resume.html')

@app.errorhandler(404)
def page_not_found(e):
	return render_template('404.html'), 404;

@app.errorhandler(500)
def servor_error(e):
	return render_template('500.html'), 500;