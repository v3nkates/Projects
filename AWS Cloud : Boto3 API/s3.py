import boto3


s4= boto3.resource('s3',
    aws_access_key_id="AKIA6LOEQXXCZ5MHXW5W",
    aws_secret_access_key="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",region_name='us-east-1'
)


s4.Bucket('mybuckter').download_file('emi-0.0.1-SNAPSHOT.jar', 'emi-0.0.1-SNAPSHOT.jar')
