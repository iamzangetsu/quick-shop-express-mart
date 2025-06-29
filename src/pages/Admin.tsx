
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { 
  ShoppingBag, 
  Users, 
  Package, 
  DollarSign, 
  TrendingUp, 
  Eye,
  Edit,
  Trash2,
  TrendingDown
} from 'lucide-react';

const Admin = () => {
  // More realistic stats with varied trends
  const stats = [
    {
      title: "Total Revenue",
      value: "$24,847.50",
      change: "+18.4%",
      icon: DollarSign,
      color: "text-green-600",
      trend: "up"
    },
    {
      title: "Orders",
      value: "1,247",
      change: "+23.1%",
      icon: ShoppingBag,
      color: "text-blue-600",
      trend: "up"
    },
    {
      title: "Customers",
      value: "3,892",
      change: "+12.8%",
      icon: Users,
      color: "text-purple-600",
      trend: "up"
    },
    {
      title: "Products",
      value: "156",
      change: "-2.3%",
      icon: Package,
      color: "text-orange-600",
      trend: "down"
    }
  ];

  // More comprehensive order data with realistic patterns
  const recentOrders = [
    {
      id: "ORD-2024-1247",
      customer: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      total: "$299.97",
      status: "Completed",
      date: "2024-01-20",
      items: 3
    },
    {
      id: "ORD-2024-1246",
      customer: "Michael Chen",
      email: "m.chen@company.com",
      total: "$89.99",
      status: "Processing",
      date: "2024-01-20",
      items: 1
    },
    {
      id: "ORD-2024-1245",
      customer: "Emma Rodriguez",
      email: "emma.r.design@gmail.com",
      total: "$156.48",
      status: "Shipped",
      date: "2024-01-19",
      items: 2
    },
    {
      id: "ORD-2024-1244",
      customer: "David Thompson",
      email: "david.thompson@business.org",
      total: "$449.99",
      status: "Pending",
      date: "2024-01-19",
      items: 1
    },
    {
      id: "ORD-2024-1243",
      customer: "Lisa Park",
      email: "lisa.park.studio@email.com",
      total: "$78.50",
      status: "Completed",
      date: "2024-01-19",
      items: 2
    },
    {
      id: "ORD-2024-1242",
      customer: "James Wilson",
      email: "j.wilson.tech@gmail.com",
      total: "$234.75",
      status: "Cancelled",
      date: "2024-01-18",
      items: 3
    }
  ];

  // Realistic product inventory with varied stock levels
  const products = [
    {
      id: "PROD-001",
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: "$99.99",
      stock: 45,
      status: "Active",
      sold: 123
    },
    {
      id: "PROD-002",
      name: "Smart Fitness Watch",
      category: "Electronics", 
      price: "$249.99",
      stock: 18,
      status: "Low Stock",
      sold: 87
    },
    {
      id: "PROD-003",
      name: "Organic Cotton T-Shirt",
      category: "Clothing",
      price: "$29.99",
      stock: 0,
      status: "Out of Stock",
      sold: 156
    },
    {
      id: "PROD-004",
      name: "Professional Camera Lens",
      category: "Photography",
      price: "$399.99",
      stock: 8,
      status: "Low Stock",
      sold: 34
    },
    {
      id: "PROD-005",
      name: "Ergonomic Office Chair",
      category: "Furniture",
      price: "$299.99",
      stock: 23,
      status: "Active",
      sold: 67
    },
    {
      id: "PROD-006",
      name: "Stainless Steel Water Bottle",
      category: "Lifestyle",
      price: "$24.99",
      stock: 89,
      status: "Active",
      sold: 234
    }
  ];

  // Top customers data
  const topCustomers = [
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      orders: 12,
      totalSpent: "$2,847.50",
      joinDate: "2023-08-15"
    },
    {
      name: "Michael Chen", 
      email: "m.chen@company.com",
      orders: 8,
      totalSpent: "$1,956.75",
      joinDate: "2023-09-22"
    },
    {
      name: "Emma Rodriguez",
      email: "emma.r.design@gmail.com", 
      orders: 15,
      totalSpent: "$3,245.80",
      joinDate: "2023-07-03"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'processing':
        return 'text-blue-600 bg-blue-100';
      case 'shipped':
        return 'text-purple-600 bg-purple-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'low stock':
        return 'text-yellow-600 bg-yellow-100';
      case 'out of stock':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your e-commerce store - Last updated: January 20, 2024</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center mt-1">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders from the past 3 days</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-sm text-gray-500">{order.items} items</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{order.total}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Top Customers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Customers</CardTitle>
              <CardDescription>Highest value customers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCustomers.map((customer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.orders} orders</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">{customer.totalSpent}</div>
                      <div className="text-sm text-gray-500">Member since {customer.joinDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inventory Overview</CardTitle>
            <CardDescription>Current product stock levels and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Sold</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.category}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.sold}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button className="h-16 flex flex-col items-center justify-center">
                <Package className="h-5 w-5 mb-1" />
                Add New Product
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                <Users className="h-5 w-5 mb-1" />
                View All Customers
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                <ShoppingBag className="h-5 w-5 mb-1" />
                View All Orders
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                <TrendingUp className="h-5 w-5 mb-1" />
                Analytics Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
