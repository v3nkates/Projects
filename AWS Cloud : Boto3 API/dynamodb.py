from flask import Flask, render_template,request
import boto3
dynamodb = boto3.resource('dynamodb',aws_access_key_id="AKIA6LOEQXXCZ5MHXW5W",aws_secret_access_key="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",region_name="us-east-1")
table = dynamodb.Table('table')
app = Flask(__name__)

@app.route('/alldata')
def hello_name():
    response = table.scan()
    data = response['Items']  
    return render_template('hello.html',name=data)

@app.route('/')
def formpage():
    return render_template('home.html')

@app.route('/book' ,methods=['GET','POST'])
def book():
    if request.method=='POST':
       response = table.put_item(Item={'appid':request.form['appid'],'time':request.form['time'],'name':request.form['name'],'date':request.form['data'],'description':request.form['description']})
       return response



if __name__ == '__main__':
   app.run(host='0.0.0.0',debug = True)
