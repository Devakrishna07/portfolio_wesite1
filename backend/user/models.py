from django.db import models

# Create your models here.
import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

DB_URL = os.getenv("DB_URL")

try:
    conn = psycopg2.connect(DB_URL)
    conn.autocommit = True

    cursor = conn.cursor()

    cursor.execute("""
       SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = 'users'
    );
    """)

    if cursor.fetchone()[0]:
         print("user_table exists")
    else:
        cursor.execute("""
            CREATE TABLE users (
             id SERIAL PRIMARY KEY,
             user_photo BYTEA,
             user_name VARCHAR(100) NOT NULL,
             city VARCHAR(100),
             email VARCHAR(100),
             cell_number VARCHAR(15),
             linkedin_url TEXT
            );
    """)
        print("Table users created successfully")

except Exception as e:
    print("Error",e)

finally:
    if 'cursor' in locals():
        cursor.close()
    if 'conn' in locals():
        conn.close()