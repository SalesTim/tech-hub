# Webhooks Reference <Badge text="beta" type="warning"/>
<Classification label="public" />

Webhooks enable organizations to trigger automated operations outside of the SalesTim platform, such as in a custom application, or in an automation tool such as Power Automate or Zapier.

::: warning
Due to the fact that data may be exchanged outside of Microsoft 365, it has to be considered as highly sensitive. Therefore managing webhooks is protected through RBAC, and restricted to users with the "Integration Manager" role (also, global admins and teams admins are by default authorized).
:::

Table of Contents:
[[toc]]

## Anatomy of a Webhook

A wehbook is defined by the following properties:
```js
{
  id:'7f105c7d-2dc5-4532-97cd-4e7ae6534c07', // webhook UUID generated during its creation
  name: 'Example Webhook', // Webhook name
  description: 'This is a new webhook', // Webhook description
  active: true, // Webhook status
  events: [ // List of events that will trigger the webhook
    'team_created',
    'team_membership_updated'
  ],
  config: {
    verb: 'post', // Only `post` is currently supported
    url: 'https://example.com/webhook', // Payload URL
    content_type: 'json', // Only `json` is currently supported
    secret:'secretClientValue' // Secret value used to authentify the wehbook emitter by the consumer
  }
}
```

## Supported events
The following events are currently supported:
```js
[
  {
    id: 'team_created',
    category: 'team'
  }
]
```

## Anatomy of a Request
When triggered, the webhook generates an HTTP POST request to the payload url.

### Headers
The following headers are systematically included:
```js
'X-SalesTim-Hook': '', // UUID of the webhook that triggered the delivery.
'X-SalesTim-Event': '', // Name of the event that triggered the delivery.
'X-SalesTim-Delivery': '', // A UUID to identify the delivery.
'X-SalesTim-Signature': '' // This header is sent if the webhook is configured with a secret.
```

### Payload
Here is a sample payload:
```js
{
  @odata.context: 'https://developers.salestim.com/api/webhooks', // Constant link to the webhook online help
  tenant_id: '7f105c7d-3cc5-4532-97cd-4e7ae6534c07',
  event_data: { // Example for the 'team_member_added' event 
    member: {
      ... // User properties
    },
    role: 'member'
  },
  metadata: {
    salesforce: { // Example additional metadata passed to the provisioning request by a third-party app using our API
      resource_type: 'Opportunity',
      resource_id: '6e205c7d-2dc5-4532-97cd-4e7ae6534c07',
      resource_data: {
        name: 'CONTOSO Opportunity',
        ...
      }
    }
  }
}
```

### User-Agent
The User-Agent for the requests will have the prefix `SalesTim-Hook/` and include the SalesTim current version number.

## Endpoints Requirements

### Security
Your endpoint must be an HTTPS webhook address with a valid SSL certificate that can correctly process event notifications.

### Verifying Webhooks
Webhooks sent by SalesTim can be verified by calculating a digital signature. Each webhook request includes a `X-SalesTim-Signature` header.
To verify that the request came from SalesTim, compute the HMAC hex digest of the request body, generated using the SHA-256 hash function and the secret as the HMAC key. If they match, then you can be sure that the webhook was sent from SalesTim.

Here are a comprehensive list of examples for multiple languages:

#### Node
```js
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret');
hmac.update('Message');
console.log(hmac.digest('hex'));
```

#### PHP
```php
<?php
echo hash_hmac('sha256', 'Message', 'secret');
?>
```

#### Java
```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class Test {
  public static void main(String[] args) {
  try {
      String secret = "secret";
      String message = "Message";

      Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
      SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
      sha256_HMAC.init(secret_key);

      byte[] hash = (sha256_HMAC.doFinal(message.getBytes()));
      StringBuffer result = new StringBuffer();
      for (byte b : hash) {
        result.append(String.format("%02x", b)); 
      }
      System.out.println(result.toString());
    }
    catch (Exception e){
      System.out.println("Error");
    }
  }
}
```

#### C#
```csharp
using System.Security.Cryptography;

namespace Test
{
	public class MyHmac
	{
		public static void Main(string[] args){
			var hmac = new MyHmac ();
			System.Console.WriteLine(hmac.CreateToken ("Message", "secret"));
		}
		private string CreateToken(string message, string secret)
		{
			secret = secret ?? "";
			var encoding = new System.Text.ASCIIEncoding();
			byte[] keyByte = encoding.GetBytes(secret);
			byte[] messageBytes = encoding.GetBytes(message);
			using (var hmacsha256 = new HMACSHA256(keyByte))
			{
				byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);

				var sb = new System.Text.StringBuilder();
				for (var i = 0; i <= hashmessage.Length - 1; i++)
				{
					sb.Append(hashmessage[i].ToString("x2"));
				}
				return sb.ToString();
			}
		}
	}
}
```

#### Go
```go
package main

import (
    "crypto/hmac"
    "crypto/sha256"
    "encoding/hex"
    "fmt"
)

func ComputeHmac256(message string, secret string) string {
    key := []byte(secret)
    h := hmac.New(sha256.New, key)
    h.Write([]byte(message))
    return hex.EncodeToString(h.Sum(nil))
}

func main() {
    fmt.Println(ComputeHmac256("Message", "secret"))
}
```

#### Ruby
```ruby
require 'openssl'
OpenSSL::HMAC.hexdigest('sha256', "secret", "Message")
```

#### Python (3.x)
```python
import hashlib
import hmac

KEY = "secret"
KEY_BYTES=KEY.encode('ascii')
MESSAGE = "Message"
MESSAGE_BYTES=MESSAGE.encode('ascii')
result = hmac.new(KEY_BYTES, MESSAGE_BYTES, hashlib.sha256).hexdigest()

print (result)
```

### Responses
The expected success response codes from the target endpoint are `200`, `201`, `202`. If any other code is received, our webhook engine will retry 2 times with a 10 seconds interval, until considering the webhook as definitely failed.

## Managing Webhooks
Organizations can create webhooks from the `Integration` tab, section `Webhooks`.
