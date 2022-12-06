import * as cdk from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';

export class StorageStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3_storage = new Bucket(this, 'fast-zakhira-storage', {
      bucketName: 'fast-zakhira-storage',
      
    });

    const fast_zakhira_db = new Table(this, 'fast-zakhira-dynamodb', {
      partitionKey: { name: 'partitionKey', type: AttributeType.STRING },
      sortKey : {name: 'sortKey', type: AttributeType.STRING},
      billingMode: BillingMode.PAY_PER_REQUEST,
      tableName: 'Fast-Zakhira-Main'
    });
  }
}