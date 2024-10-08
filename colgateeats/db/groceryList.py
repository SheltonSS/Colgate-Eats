import sqlite3

# Function to create database and tables
def create_database():
    conn = sqlite3.connect('grocery_store.db')
    cursor = conn.cursor()

    # Create GroceryStores table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS GroceryStores (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        type TEXT NOT NULL
    )
    ''')

    # Create Recipes table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Recipes (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        ingredients TEXT NOT NULL,
        instructions TEXT NOT NULL
    )
    ''')

    # Create Routes table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS Routes (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        origin TEXT NOT NULL,
        start_time TIME NOT NULL,
        end_time TIME NOT NULL
    )
    ''')

    # Create RouteDays table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS RouteDays (
        id INTEGER PRIMARY KEY,
        day TEXT NOT NULL,
        route_ID INTEGER NOT NULL,
        FOREIGN KEY (route_ID) REFERENCES Routes(id)
    )
    ''')

    # Create StoreRoutes table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS StoreRoutes (
        id INTEGER PRIMARY KEY,
        store_ID INTEGER NOT NULL,
        route_ID INTEGER NOT NULL,
        FOREIGN KEY (store_ID) REFERENCES GroceryStores(id),
        FOREIGN KEY (route_ID) REFERENCES Routes(id)
    )
    ''')

    # Commit the changes and close the connection
    conn.commit()
    conn.close()

    print("Database and tables created successfully!")

# Function to insert sample data
def insert_sample_data():
    conn = sqlite3.connect('grocery_store.db')
    cursor = conn.cursor()

    # Sample grocery stores
    stores = [
        ('Aye Tue Asian Grocery Store', '335 South St, Utica', 'Asian', 'Bleeker Route'),
        ('Sweet Asian Food Market', '645 South St, Utica', 'Asian', 'Bleeker Route'),
        ('Royal Imports', '1201 Albany St, Utica', 'Asian', 'South,Albany,Webster Route'),
        ('Ruznic Market & Restaurant', '801 Albany St, Utica', 'Europe', 'South,Albany,Webster Route'),
        ('International Grocery', '1024 Webster Ave, Utica', 'Europe', 'South,Albany,Webster Route'),
        ('Kendic Bakery & Grocery', '1305 Bleecker St, Utica', 'Europe', 'Bleeker Route'),
        ('Ecuamex Deli Store Corp.', '1207 Bleecker St, Utica', 'Latin', 'Bleeker Route'),
        ('Romas Sausage & Deli', '2029 Bleecker St, Utica', 'Europe', 'Bleeker Route'),
        ('Sammy & Annie Foods The Store and Cafe', '717 Bleecker St, Utica', 'Europe', 'Bleeker Route'),
        ('Moon Light Burmese Food Store', '1205 Bleecker St', 'Asian', 'Bleeker Route'),
        ('Uncle Bakarr African Grocery', '677 Bleecker St, Utica', 'African', 'Bleeker Route'),
        ('Nguyen Phat Oriental Store', '643 Bleecker St, Utica', 'Asian', 'Bleeker Route'),
        ('Muju International Grocery', '1026 Champlin Ave, Utica', 'Asian', 'South,Albany,Webster Route'),
        ('Asia Food Market', '1449 Erie Blvd E, Syracuse', 'Asian', 'Syracuse Route'),
        ('Hans Oriental Supermarket', '2731 Erie Blvd E, Syracuse', 'Asian', 'Syracuse Route'),
    ]

    # Insert sample grocery stores
    cursor.executemany('INSERT INTO GroceryStores (name, address, type) VALUES (?, ?, ?)', stores)

    # Sample recipes
    recipes = [
        ('Maja Blanca', 'Evaporated Milk, Coconut Milk', 'Mix things.')
    ]

    # Insert sample recipes
    cursor.executemany('INSERT INTO Recipes (title, ingredients, instructions) VALUES (?, ?, ?)', recipes)

    # Routes
    routes = [
        ('Bleeker Route', 'Frank Stop', '12:00 PM', '5PM'),
        ('South,Albany,Webster Route', 'Frank Stop', '12PM', '5PM'),
        ('Syracuse Route', 'Frank Stop', '10AM', '8PM')
    ]
    cursor.executemany('INSERT INTO Routes (name, origin, start_time, end_time) VALUES (?, ?, ?, ?)', routes)

    # Route Days
    routedays = [
        ('Friday', 1),
        ('Saturday', 1),
        ('Sunday', 2)
    ]
    cursor.executemany('INSERT INTO RouteDays (day, route_ID) VALUES (?, ?)', routedays)

    # Store Routes
    storeroutes = [
        (1, 1),
        (2, 1),
        (3, 2)
    ]
    
    cursor.executemany('INSERT INTO StoreRoutes (store_ID, route_ID) VALUES (?, ?)', storeroutes)

    # Commit changes and close the connection
    conn.commit()
    conn.close()

    print("Sample data inserted successfully!")

# Main function for user interaction
def main():
    create_database()
    insert_sample_data()

# Run the main function
if __name__ == "__main__":
    main()
