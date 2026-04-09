/**
 * PAMTECH AUTOMOBILE - MAIN JAVASCRIPT
 * All functionality using Vanilla JS and LocalStorage
 */

// ============================================
// LOCAL STORAGE UTILITIES
// ============================================

const Storage = {
    // Generic get/set/remove methods
    get(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    // Initialize default data
    init() {
        // Initialize Users
        if (!this.get('users')) {
            this.set('users', []);
        }
        
        // Initialize Current User
        if (!this.get('currentUser')) {
            this.set('currentUser', null);
        }
        
        // Initialize Products (Autoparts)
        if (!this.get('products')) {
            this.set('products', [
                {
                    id: 1,
                    name: 'Brake Pads - Toyota Camry',
                    price: 25000,
                    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
                    category: 'Brakes',
                    description: 'High-quality brake pads for Toyota Camry 2007-2021'
                },
                {
                    id: 2,
                    name: 'Engine Oil - 5W-30 Full Synthetic',
                    price: 18000,
                    image: 'https://images.unsplash.com/photo-1605218427306-022ba6c5545c?w=400',
                    category: 'Oils',
                    description: 'Premium full synthetic engine oil 4L'
                },
                {
                    id: 3,
                    name: 'Air Filter - Honda Accord',
                    price: 8500,
                    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400',
                    category: 'Filters',
                    description: 'OEM quality air filter for Honda Accord'
                },
                {
                    id: 4,
                    name: 'Spark Plugs - NGK Iridium (Set of 4)',
                    price: 15000,
                    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
                    category: 'Ignition',
                    description: 'High-performance iridium spark plugs'
                },
                {
                    id: 5,
                    name: 'Car Battery - 75AH',
                    price: 45000,
                    image: 'https://images.unsplash.com/photo-1625043484556-226d4d6f6a1f?w=400',
                    category: 'Electrical',
                    description: 'Maintenance-free car battery with 2-year warranty'
                },
                {
                    id: 6,
                    name: 'Alternator - Toyota Corolla',
                    price: 85000,
                    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
                    category: 'Electrical',
                    description: 'Rebuilt alternator for Toyota Corolla 2010-2019'
                }
            ]);
        }
        
        // Initialize Cars (Autoland)
        if (!this.get('cars')) {
            this.set('cars', [
                {
                    id: 1,
                    name: 'Toyota Camry XLE 2020',
                    price: 18500000,
                    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600',
                    year: 2020,
                    mileage: 45000,
                    fuel: 'Petrol',
                    transmission: 'Automatic',
                    color: 'Silver',
                    description: 'Well-maintained Toyota Camry with leather seats, sunroof, and full service history.',
                    features: ['Leather Seats', 'Sunroof', 'Reverse Camera', 'Bluetooth', 'Cruise Control']
                },
                {
                    id: 2,
                    name: 'Lexus RX 350 2019',
                    price: 28000000,
                    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600',
                    year: 2019,
                    mileage: 38000,
                    fuel: 'Petrol',
                    transmission: 'Automatic',
                    color: 'Black',
                    description: 'Luxury SUV in excellent condition with all premium features.',
                    features: ['Navigation', 'Panoramic Roof', 'Heated Seats', '360 Camera', 'Lane Assist']
                },
                {
                    id: 3,
                    name: 'Honda Accord Sport 2021',
                    price: 22000000,
                    image: 'https://images.unsplash.com/photo-1605816988079-7f58fd69e3af?w=600',
                    year: 2021,
                    mileage: 25000,
                    fuel: 'Petrol',
                    transmission: 'CVT',
                    color: 'White',
                    description: 'Sport trim with turbo engine, excellent fuel economy.',
                    features: ['Turbo Engine', 'Apple CarPlay', 'Android Auto', 'Sport Mode', 'LED Lights']
                },
                {
                    id: 4,
                    name: 'Mercedes-Benz C300 2018',
                    price: 32000000,
                    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600',
                    year: 2018,
                    mileage: 52000,
                    fuel: 'Petrol',
                    transmission: 'Automatic',
                    color: 'Grey',
                    description: 'German luxury sedan with premium interior and smooth ride.',
                    features: ['Leather Interior', 'Burmester Sound', 'Ambient Lighting', 'Keyless Entry', 'Blind Spot Assist']
                }
            ]);
        }
        
        // Initialize Properties (Real Estate)
        if (!this.get('properties')) {
            this.set('properties', [
                {
                    id: 1,
                    title: 'Luxury 5 Bedroom Duplex',
                    price: 450000000,
                    location: 'Lekki Phase 1, Lagos',
                    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600',
                    bedrooms: 5,
                    bathrooms: 6,
                    area: '800 sqm',
                    type: 'Duplex',
                    description: 'Stunning 5-bedroom fully detached duplex with swimming pool, BQ, and 24/7 power.',
                    features: ['Swimming Pool', 'BQ', '24/7 Power', 'Security', 'Smart Home']
                },
                {
                    id: 2,
                    title: 'Modern 3 Bedroom Apartment',
                    price: 85000000,
                    location: 'Ikoyi, Lagos',
                    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
                    bedrooms: 3,
                    bathrooms: 4,
                    area: '350 sqm',
                    type: 'Apartment',
                    description: 'Contemporary apartment in prime location with city views.',
                    features: ['Gym', 'Elevator', 'Parking', 'Concierge', 'Rooftop Terrace']
                },
                {
                    id: 3,
                    title: '4 Bedroom Terrace House',
                    price: 120000000,
                    location: 'Victoria Island, Lagos',
                    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
                    bedrooms: 4,
                    bathrooms: 5,
                    area: '500 sqm',
                    type: 'Terrace',
                    description: 'Elegant terrace house in secure estate with modern finishes.',
                    features: ['Garden', 'Parking', 'Security', 'Play Area', 'Guest Room']
                },
                {
                    id: 4,
                    title: 'Commercial Office Space',
                    price: 250000000,
                    location: 'Marina, Lagos',
                    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
                    bedrooms: 0,
                    bathrooms: 4,
                    area: '1000 sqm',
                    type: 'Commercial',
                    description: 'Prime office space in CBD with parking and modern facilities.',
                    features: ['Open Plan', 'Meeting Rooms', 'Parking', 'Elevator', 'Generator']
                }
            ]);
        }
        
        // Initialize Luxury Vehicles
        if (!this.get('luxuryVehicles')) {
            this.set('luxuryVehicles', [
                {
                    id: 1,
                    name: 'Toyota Hilux 2022',
                    pricePerDay: 75000,
                    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=600',
                    type: 'Pickup',
                    seats: 5,
                    description: 'Rugged and reliable pickup truck perfect for any terrain.',
                    features: ['4WD', 'Air Conditioning', 'Bluetooth', 'Towing Capacity']
                },
                {
                    id: 2,
                    name: 'Toyota Prado VX 2021',
                    pricePerDay: 120000,
                    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600',
                    type: 'SUV',
                    seats: 7,
                    description: 'Premium SUV with luxury features and off-road capability.',
                    features: ['Leather Seats', 'Sunroof', 'Navigation', 'Cruise Control', '7 Seats']
                },
                {
                    id: 3,
                    name: 'Mercedes G-Wagon G63',
                    pricePerDay: 350000,
                    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=600',
                    type: 'Luxury SUV',
                    seats: 5,
                    description: 'Iconic luxury SUV for special occasions and VIP transport.',
                    features: ['AMG Package', 'Premium Sound', 'Massage Seats', 'Panoramic Roof']
                },
                {
                    id: 4,
                    name: 'Lexus LX 570 2020',
                    pricePerDay: 180000,
                    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600',
                    type: 'Luxury SUV',
                    seats: 8,
                    description: 'Full-size luxury SUV with exceptional comfort and power.',
                    features: ['Mark Levinson Audio', 'Cool Box', 'Third Row', 'Air Suspension']
                }
            ]);
        }
        
        // Initialize Cart
        if (!this.get('cart')) {
            this.set('cart', []);
        }
        
        // Initialize Orders
        if (!this.get('orders')) {
            this.set('orders', []);
        }
        
        // Initialize Fuel Transactions
        if (!this.get('fuelTransactions')) {
            this.set('fuelTransactions', []);
        }
        
        // Initialize Bookings
        if (!this.get('bookings')) {
            this.set('bookings', []);
        }
        
        // Initialize Blog Posts
        if (!this.get('blogPosts')) {
            this.set('blogPosts', [
                {
                    id: 1,
                    title: 'Pamtech Expands Operations to Abuja',
                    excerpt: 'We are excited to announce the opening of our new branch in Abuja, bringing our premium automotive services closer to you.',
                    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600',
                    date: '2024-03-15',
                    category: 'Company News'
                },
                {
                    id: 2,
                    title: 'Top 10 Car Maintenance Tips for Nigerian Roads',
                    excerpt: 'Keep your vehicle in top condition with these essential maintenance tips designed for local driving conditions.',
                    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600',
                    date: '2024-03-10',
                    category: 'Automotive Tips'
                },
                {
                    id: 3,
                    title: 'New Partnership with International Parts Suppliers',
                    excerpt: 'Pamtech Autoparts now offers even more genuine parts through our strategic global partnerships.',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
                    date: '2024-03-05',
                    category: 'Business'
                }
            ]);
        }
    }
};

// ============================================
// AUTHENTICATION SYSTEM
// ============================================

const Auth = {
    // Check if user is logged in
    isLoggedIn() {
        return Storage.get('currentUser') !== null;
    },
    
    // Get current user
    getCurrentUser() {
        return Storage.get('currentUser');
    },
    
    // Sign up new user
    signup(name, email, phone, password) {
        const users = Storage.get('users') || [];
        
        // Check if email exists
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Email already registered' };
        }
        
        const newUser = {
            id: Date.now(),
            name,
            email,
            phone,
            password, // In production, this should be hashed
            createdAt: new Date().toISOString(),
            role: 'user'
        };
        
        users.push(newUser);
        Storage.set('users', users);
        
        // Auto login
        const { password: _, ...userWithoutPassword } = newUser;
        Storage.set('currentUser', userWithoutPassword);
        
        return { success: true, message: 'Account created successfully' };
    },
    
    // Login user
    login(email, password) {
        const users = Storage.get('users') || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            return { success: false, message: 'Invalid email or password' };
        }
        
        const { password: _, ...userWithoutPassword } = user;
        Storage.set('currentUser', userWithoutPassword);
        
        return { success: true, message: 'Login successful' };
    },
    
    // Admin login
    adminLogin(username, password) {
        if (username === 'admin' && password === 'admin123') {
            Storage.set('currentUser', {
                id: 'admin',
                name: 'Administrator',
                email: 'admin@pamtech.com',
                role: 'admin'
            });
            return { success: true, message: 'Admin login successful' };
        }
        return { success: false, message: 'Invalid admin credentials' };
    },
    
    // Logout
    logout() {
        Storage.set('currentUser', null);
        window.location.href = 'index.html';
    },
    
    // Update profile
    updateProfile(updates) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) return { success: false, message: 'Not logged in' };
        
        const users = Storage.get('users') || [];
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex === -1) return { success: false, message: 'User not found' };
        
        users[userIndex] = { ...users[userIndex], ...updates };
        Storage.set('users', users);
        
        const { password: _, ...userWithoutPassword } = users[userIndex];
        Storage.set('currentUser', userWithoutPassword);
        
        return { success: true, message: 'Profile updated successfully' };
    },
    
    // Protect route (redirect if not logged in)
    requireAuth() {
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    },
    
    // Protect admin route
    requireAdmin() {
        const user = this.getCurrentUser();
        if (!user || user.role !== 'admin') {
            window.location.href = 'index.html';
            return false;
        }
        return true;
    }
};

// ============================================
// CART SYSTEM
// ============================================

const Cart = {
    // Get cart items
    getItems() {
        return Storage.get('cart') || [];
    },
    
    // Add item to cart
    addItem(product) {
        const cart = this.getItems();
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        Storage.set('cart', cart);
        this.updateCartCount();
        showNotification('Item added to cart', 'success');
    },
    
    // Remove item from cart
    removeItem(productId) {
        let cart = this.getItems();
        cart = cart.filter(item => item.id !== productId);
        Storage.set('cart', cart);
        this.updateCartCount();
        showNotification('Item removed from cart', 'success');
    },
    
    // Update quantity
    updateQuantity(productId, quantity) {
        const cart = this.getItems();
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                Storage.set('cart', cart);
            }
        }
        
        this.updateCartCount();
    },
    
    // Clear cart
    clear() {
        Storage.set('cart', []);
        this.updateCartCount();
    },
    
    // Get total items count
    getCount() {
        return this.getItems().reduce((total, item) => total + item.quantity, 0);
    },
    
    // Get total price
    getTotal() {
        return this.getItems().reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    // Update cart count badge
    updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const count = this.getCount();
        cartCountElements.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    },
    
    // Checkout
    checkout() {
        const cart = this.getItems();
        const currentUser = Auth.getCurrentUser();
        
        if (cart.length === 0) {
            return { success: false, message: 'Cart is empty' };
        }
        
        const order = {
            id: Date.now(),
            userId: currentUser ? currentUser.id : 'guest',
            userName: currentUser ? currentUser.name : 'Guest',
            items: cart,
            total: this.getTotal(),
            status: 'Pending',
            date: new Date().toISOString()
        };
        
        const orders = Storage.get('orders') || [];
        orders.push(order);
        Storage.set('orders', orders);
        
        this.clear();
        
        return { success: true, message: 'Order placed successfully', orderId: order.id };
    }
};

// ============================================
// PRODUCT MANAGEMENT
// ============================================

const Products = {
    getAll() {
        return Storage.get('products') || [];
    },
    
    getById(id) {
        return this.getAll().find(p => p.id === id);
    },
    
    getByCategory(category) {
        if (!category || category === 'all') return this.getAll();
        return this.getAll().filter(p => p.category === category);
    },
    
    search(query) {
        const products = this.getAll();
        if (!query) return products;
        return products.filter(p => 
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        );
    },
    
    add(product) {
        const products = this.getAll();
        product.id = Date.now();
        products.push(product);
        Storage.set('products', products);
        return { success: true, message: 'Product added successfully' };
    },
    
    update(id, updates) {
        const products = this.getAll();
        const index = products.findIndex(p => p.id === id);
        if (index === -1) return { success: false, message: 'Product not found' };
        
        products[index] = { ...products[index], ...updates };
        Storage.set('products', products);
        return { success: true, message: 'Product updated successfully' };
    },
    
    delete(id) {
        let products = this.getAll();
        products = products.filter(p => p.id !== id);
        Storage.set('products', products);
        return { success: true, message: 'Product deleted successfully' };
    }
};

// ============================================
// CAR MANAGEMENT (AUTOLAND)
// ============================================

const Cars = {
    getAll() {
        return Storage.get('cars') || [];
    },
    
    getById(id) {
        return this.getAll().find(c => c.id === id);
    },
    
    search(query) {
        const cars = this.getAll();
        if (!query) return cars;
        return cars.filter(c => 
            c.name.toLowerCase().includes(query.toLowerCase())
        );
    },
    
    filter(filters) {
        let cars = this.getAll();
        
        if (filters.minPrice) {
            cars = cars.filter(c => c.price >= filters.minPrice);
        }
        if (filters.maxPrice) {
            cars = cars.filter(c => c.price <= filters.maxPrice);
        }
        if (filters.year) {
            cars = cars.filter(c => c.year >= filters.year);
        }
        
        return cars;
    },
    
    add(car) {
        const cars = this.getAll();
        car.id = Date.now();
        cars.push(car);
        Storage.set('cars', cars);
        return { success: true, message: 'Car added successfully' };
    },
    
    update(id, updates) {
        const cars = this.getAll();
        const index = cars.findIndex(c => c.id === id);
        if (index === -1) return { success: false, message: 'Car not found' };
        
        cars[index] = { ...cars[index], ...updates };
        Storage.set('cars', cars);
        return { success: true, message: 'Car updated successfully' };
    },
    
    delete(id) {
        let cars = this.getAll();
        cars = cars.filter(c => c.id !== id);
        Storage.set('cars', cars);
        return { success: true, message: 'Car deleted successfully' };
    }
};

// ============================================
// PROPERTY MANAGEMENT (REAL ESTATE)
// ============================================

const Properties = {
    getAll() {
        return Storage.get('properties') || [];
    },
    
    getById(id) {
        return this.getAll().find(p => p.id === id);
    },
    
    search(query) {
        const properties = this.getAll();
        if (!query) return properties;
        return properties.filter(p => 
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.location.toLowerCase().includes(query.toLowerCase())
        );
    },
    
    filter(filters) {
        let properties = this.getAll();
        
        if (filters.type && filters.type !== 'all') {
            properties = properties.filter(p => p.type === filters.type);
        }
        if (filters.minPrice) {
            properties = properties.filter(p => p.price >= filters.minPrice);
        }
        if (filters.maxPrice) {
            properties = properties.filter(p => p.price <= filters.maxPrice);
        }
        
        return properties;
    },
    
    add(property) {
        const properties = this.getAll();
        property.id = Date.now();
        properties.push(property);
        Storage.set('properties', properties);
        return { success: true, message: 'Property added successfully' };
    },
    
    update(id, updates) {
        const properties = this.getAll();
        const index = properties.findIndex(p => p.id === id);
        if (index === -1) return { success: false, message: 'Property not found' };
        
        properties[index] = { ...properties[index], ...updates };
        Storage.set('properties', properties);
        return { success: true, message: 'Property updated successfully' };
    },
    
    delete(id) {
        let properties = this.getAll();
        properties = properties.filter(p => p.id !== id);
        Storage.set('properties', properties);
        return { success: true, message: 'Property deleted successfully' };
    }
};

// ============================================
// LUXURY VEHICLE MANAGEMENT
// ============================================

const LuxuryVehicles = {
    getAll() {
        return Storage.get('luxuryVehicles') || [];
    },
    
    getById(id) {
        return this.getAll().find(v => v.id === id);
    },
    
    add(vehicle) {
        const vehicles = this.getAll();
        vehicle.id = Date.now();
        vehicles.push(vehicle);
        Storage.set('luxuryVehicles', vehicles);
        return { success: true, message: 'Vehicle added successfully' };
    },
    
    update(id, updates) {
        const vehicles = this.getAll();
        const index = vehicles.findIndex(v => v.id === id);
        if (index === -1) return { success: false, message: 'Vehicle not found' };
        
        vehicles[index] = { ...vehicles[index], ...updates };
        Storage.set('luxuryVehicles', vehicles);
        return { success: true, message: 'Vehicle updated successfully' };
    },
    
    delete(id) {
        let vehicles = this.getAll();
        vehicles = vehicles.filter(v => v.id !== id);
        Storage.set('luxuryVehicles', vehicles);
        return { success: true, message: 'Vehicle deleted successfully' };
    }
};

// ============================================
// BOOKING SYSTEM (LUXURY RIDES)
// ============================================

const Bookings = {
    getAll() {
        return Storage.get('bookings') || [];
    },
    
    create(bookingData) {
        const currentUser = Auth.getCurrentUser();
        const booking = {
            id: Date.now(),
            ...bookingData,
            userId: currentUser ? currentUser.id : 'guest',
            userName: currentUser ? currentUser.name : 'Guest',
            status: 'Pending',
            createdAt: new Date().toISOString()
        };
        
        const bookings = this.getAll();
        bookings.push(booking);
        Storage.set('bookings', bookings);
        
        return { success: true, message: 'Booking created successfully', bookingId: booking.id };
    },
    
    updateStatus(id, status) {
        const bookings = this.getAll();
        const index = bookings.findIndex(b => b.id === id);
        if (index === -1) return { success: false, message: 'Booking not found' };
        
        bookings[index].status = status;
        Storage.set('bookings', bookings);
        return { success: true, message: 'Booking status updated' };
    },
    
    delete(id) {
        let bookings = this.getAll();
        bookings = bookings.filter(b => b.id !== id);
        Storage.set('bookings', bookings);
        return { success: true, message: 'Booking deleted successfully' };
    }
};

// ============================================
// FUEL SYSTEM (OIL & GAS)
// ============================================

const FuelSystem = {
    prices: {
        petrol: 650, // per liter
        diesel: 750,
        kerosene: 550
    },
    
    getPrice(type) {
        return this.prices[type] || 0;
    },
    
    calculateTotal(liters, type) {
        return liters * this.getPrice(type);
    },
    
    createTransaction(fuelData) {
        const currentUser = Auth.getCurrentUser();
        const transaction = {
            id: Date.now(),
            ...fuelData,
            userId: currentUser ? currentUser.id : 'guest',
            userName: currentUser ? currentUser.name : 'Guest',
            status: 'UNUSED',
            createdAt: new Date().toISOString(),
            qrCode: this.generateQRCode()
        };
        
        const transactions = Storage.get('fuelTransactions') || [];
        transactions.push(transaction);
        Storage.set('fuelTransactions', transactions);
        
        return { success: true, message: 'Fuel purchase successful', transaction };
    },
    
    generateQRCode() {
        // Generate a random code for QR
        return 'PT-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    },
    
    getTransaction(id) {
        const transactions = Storage.get('fuelTransactions') || [];
        return transactions.find(t => t.id == id);
    },
    
    updateStatus(id, status) {
        const transactions = Storage.get('fuelTransactions') || [];
        const index = transactions.findIndex(t => t.id == id);
        if (index === -1) return { success: false, message: 'Transaction not found' };
        
        transactions[index].status = status;
        Storage.set('fuelTransactions', transactions);
        return { success: true, message: 'Status updated successfully' };
    },
    
    getAll() {
        return Storage.get('fuelTransactions') || [];
    }
};

// ============================================
// QR CODE GENERATOR
// ============================================
const QRGenerator = {
    generate(purchase, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Clear previous QR
        container.innerHTML = '';

        // Prepare data to encode
        const qrData = JSON.stringify({
            id: purchase.id,
            fuelType: purchase.fuelTypeName,
            amount: purchase.amount,
            liters: purchase.liters,
            status: purchase.status,
            date: purchase.date
        });

        // Generate real QR code
        if (typeof QRCode !== 'undefined') {
            new QRCode(container, {
                text: qrData,
                width: 200,
                height: 200,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
        }
    }
};

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info', title = '') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const iconMap = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">${iconMap[type] || 'ℹ'}</div>
        <div class="notification-content">
            <h4>${title || (type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Info')}</h4>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto remove
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

const Utils = {
    // Format currency (Naira)
    formatCurrency(amount) {
        return '₦' + amount.toLocaleString('en-NG');
    },
    
    // Format date
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-NG', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    },
    
    // Format number
    formatNumber(num) {
        return num.toLocaleString('en-NG');
    },
    
    // Generate ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Validate email
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    // Validate phone (Nigerian format)
    isValidPhone(phone) {
        return /^[0-9]{11}$/.test(phone.replace(/\s/g, ''));
    }
};

// ============================================
// NAVIGATION & UI
// ============================================

const UI = {
    // Initialize navbar scroll effect
    initNavbar() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    },
    
    // Initialize mobile menu
    initMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!menuBtn || !navMenu) return;
        
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    },
    
    // Update auth UI based on login state
    updateAuthUI() {
        const currentUser = Auth.getCurrentUser();
        const authLinks = document.querySelectorAll('.auth-link');
        
        authLinks.forEach(link => {
            if (currentUser) {
                link.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
                link.href = 'dashboard.html';
            } else {
                link.innerHTML = `<i class="fas fa-user"></i> Login`;
                link.href = 'login.html';
            }
        });
    },
    
    // Initialize modals
    initModals() {
        const modalTriggers = document.querySelectorAll('[data-modal]');
        const modalCloses = document.querySelectorAll('.modal-close, .modal-overlay');
        
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.dataset.modal;
                const modal = document.getElementById(modalId);
                if (modal) modal.classList.add('active');
            });
        });
        
        modalCloses.forEach(close => {
            close.addEventListener('click', (e) => {
                if (e.target === close) {
                    close.closest('.modal-overlay').classList.remove('active');
                }
            });
        });
    },
    
    // Render stars rating
    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let html = '';
        
        for (let i = 0; i < fullStars; i++) {
            html += '<i class="fas fa-star"></i>';
        }
        if (hasHalfStar) {
            html += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
            html += '<i class="far fa-star"></i>';
        }
        
        return html;
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize storage with default data
    Storage.init();
    
    // Initialize UI components
    UI.initNavbar();
    UI.initMobileMenu();
    UI.updateAuthUI();
    UI.initModals();
    
    // Update cart count
    Cart.updateCartCount();
    
    // Add active class to current nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// ============================================
// EXPORT FOR GLOBAL ACCESS
// ============================================

window.Pamtech = {
    Storage,
    Auth,
    Cart,
    Products,
    Cars,
    Properties,
    LuxuryVehicles,
    Bookings,
    FuelSystem,
    QRGenerator,
    Utils,
    UI,
    showNotification
};
