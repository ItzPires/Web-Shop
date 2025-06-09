import json
import random
from datetime import datetime, timedelta

# Datta to be used for generating products
number_of_products = 50
brands = [1, 2, 3, 4, 5, 6]
conditions = [1, 2, 3]
locations = ['Lisboa', 'Porto', 'Aveiro', 'Coimbra', 'Viseu']
categories = [1, 2, 3]
product_names = [
    'Smartphone', 'Laptop', 'Tablet', 'Smartwatch', 'Audio Headphones',
    'Smart TV', 'Digital Camera', 'Impressora', 'Monitor'
]
characteristics = [
    '8GB RAM', '16GB RAM', '32GB Storage', '64GB Storage', 'HDMI Port',
    'Bluetooth', 'Wi-Fi', '4K Resolution', '1080p Resolution', 'Touchscreen'
]
compliments = [
    'Excelente Estado', 'Ótimo', 'Incrível', 'Fantástico', 'Maravilhoso']

# Function to generate a random date
def random_date(start_days_ago=365, end_days_ago=1):
    days_ago = random.randint(end_days_ago, start_days_ago)
    date = datetime.now() - timedelta(days=days_ago)
    return date.strftime('%Y/%m/%d')

# Generate a list of products
products = []
for i in range(number_of_products):
    name = random.choice(product_names) + " " + random.choice(characteristics)

    product = {
        "name": name,
        "description": f"{name} {random.choice(compliments)}",
        "price": f"{random.randint(80, 1500)}.00",
        "brand": random.choice(brands),
        "condition": random.choice(conditions),
        "location": random.choice(locations),
        "date": random_date(),
        "category": random.choice(categories)
    }
    products.append(product)

json_output = json.dumps(products, indent=2, ensure_ascii=False)

# Save to a JSON file
with open('products.json', 'w', encoding='utf-8') as file:
    file.write(json_output)
