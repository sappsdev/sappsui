<script lang="ts">
  import {
    Avatar,
    Button,
    Card,
    CardBody,
    Flex,
    Icons,
    Page,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Text,
  } from "$lib/index.js";

  // Sample data for user list
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: "4",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "User",
      status: "Active",
    },
  ];

  // Sample data for product list
  const products = [
    {
      id: "1",
      name: "Laptop Pro",
      price: 1299,
      stock: 45,
      category: "Electronics",
    },
    {
      id: "2",
      name: "Wireless Mouse",
      price: 29.99,
      stock: 120,
      category: "Accessories",
    },
    {
      id: "3",
      name: "HD Monitor",
      price: 349.99,
      stock: 30,
      category: "Electronics",
    },
    {
      id: "4",
      name: "Keyboard",
      price: 59.99,
      stock: 85,
      category: "Accessories",
    },
  ];

  // Sample data for tasks
  const tasks = [
    {
      id: "1",
      title: "Complete Project Proposal",
      priority: "High",
      deadline: "2024-03-15",
      progress: 75,
    },
    {
      id: "2",
      title: "Review Code Changes",
      priority: "Medium",
      deadline: "2024-03-12",
      progress: 30,
    },
    {
      id: "3",
      title: "Update Documentation",
      priority: "Low",
      deadline: "2024-03-20",
      progress: 90,
    },
  ];

  // Sample data for transactions
  const transactions = [
    {
      id: "1",
      date: "2024-03-10",
      amount: 1500.0,
      type: "Income",
      category: "Salary",
      status: "Completed",
    },
    {
      id: "2",
      date: "2024-03-09",
      amount: 120.5,
      type: "Expense",
      category: "Utilities",
      status: "Pending",
    },
    {
      id: "3",
      date: "2024-03-08",
      amount: 750.0,
      type: "Income",
      category: "Freelance",
      status: "Completed",
    },
  ];

  let sortDescriptor = $state({
    key: "name",
    direction: "ascending",
  });
  let selectedKeys = $state([]);
</script>

<Page class="p-4 pb-10 gap-4">
  <Flex direction="column" class="gap-2">
    <Text variant="h2">Table</Text>
    <Text
      >A versatile table component with support for sorting, selection, and
      various styling options.</Text
    >
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">User List with Avatars</Text>
    <Card>
      <CardBody>
        <Table color="primary" isStriped>
          <TableHeader>
            <TableColumn>User</TableColumn>
            <TableColumn id="email" sortable>Email</TableColumn>
            <TableColumn id="role" sortable>Role</TableColumn>
            <TableColumn id="status" sortable>Status</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {#each users as user}
              <TableRow id={user.id}>
                <TableCell>
                  <Flex class="gap-2 items-center">
                    <Avatar
                      src={`https://i.pravatar.cc/150?u=${user.email}`}
                      name={user.name}
                      size="s-sm"
                    />
                    <Text>{user.name}</Text>
                  </Flex>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    size="s-sm"
                    color={user.status === "Active" ? "success" : "warning"}
                    variant="flat"
                  >
                    {user.status}
                  </Button>
                </TableCell>
                <TableCell>
                  <Flex class="gap-2">
                    <Button size="s-sm" variant="light">
                      <Icons icon="solar:pen-bold" class="text-lg" />
                    </Button>
                    <Button size="s-sm" variant="light" color="danger">
                      <Icons
                        icon="solar:trash-bin-trash-bold"
                        class="text-lg"
                      />
                    </Button>
                  </Flex>
                </TableCell>
              </TableRow>
            {/each}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Product List (Compact)</Text>
    <Card>
      <CardBody>
        <Table color="secondary" isCompact isStriped>
          <TableHeader>
            <TableColumn id="name" sortable>Product Name</TableColumn>
            <TableColumn id="price" sortable>Price</TableColumn>
            <TableColumn id="stock" sortable>Stock</TableColumn>
            <TableColumn id="category" sortable>Category</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {#each products as product}
              <TableRow>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <Button size="s-xs" color="primary" variant="flat">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            {/each}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Task Management Table</Text>
    <Card>
      <CardBody>
        <Table color="accent" isStriped>
          <TableHeader>
            <TableColumn id="title" sortable>Task Title</TableColumn>
            <TableColumn id="priority" sortable>
              <Flex class="gap-2 items-center">
                <Icons icon="solar:flag-bold" />
                Priority
              </Flex>
            </TableColumn>
            <TableColumn id="deadline" sortable>
              <Flex class="gap-2 items-center">
                <Icons icon="solar:calendar-bold" />
                Deadline
              </Flex>
            </TableColumn>
            <TableColumn id="progress" sortable>Progress</TableColumn>
          </TableHeader>
          <TableBody>
            {#each tasks as task}
              <TableRow>
                <TableCell>{task.title}</TableCell>
                <TableCell>
                  <Button
                    size="s-sm"
                    color={task.priority === "High"
                      ? "danger"
                      : task.priority === "Medium"
                        ? "warning"
                        : "success"}
                    variant="flat"
                  >
                    {task.priority}
                  </Button>
                </TableCell>
                <TableCell>{task.deadline}</TableCell>
                <TableCell>
                  <Flex class="gap-2 items-center">
                    <div
                      class="w-24 h-2 bg-base300 rounded-full overflow-hidden"
                    >
                      <!-- svelte-ignore element_invalid_self_closing_tag -->
                      <div
                        class="h-full bg-success"
                        style={`width: ${task.progress}%`}
                      />
                    </div>
                    <Text class="text-sm">{task.progress}%</Text>
                  </Flex>
                </TableCell>
              </TableRow>
            {/each}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  </Flex>

  <Flex direction="column" class="gap-2">
    <Text variant="h4">Financial Transactions</Text>
    <Card>
      <CardBody>
        <Table color="info" isStriped radius="r-lg">
          <TableHeader>
            <TableColumn id="date" sortable>
              <Flex class="gap-2 items-center">
                <Icons icon="solar:calendar-bold" />
                Date
              </Flex>
            </TableColumn>
            <TableColumn id="amount" sortable>
              <Flex class="gap-2 items-center">
                <Icons icon="solar:dollar-minimalistic-bold" />
                Amount
              </Flex>
            </TableColumn>
            <TableColumn id="type" sortable>Type</TableColumn>
            <TableColumn id="category" sortable>Category</TableColumn>
            <TableColumn id="status" sortable>Status</TableColumn>
          </TableHeader>
          <TableBody>
            {#each transactions as transaction}
              <TableRow>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <Text
                    class={transaction.type === "Income"
                      ? "text-success"
                      : "text-danger"}
                  >
                    ${transaction.amount.toFixed(2)}
                  </Text>
                </TableCell>
                <TableCell>
                  <Button
                    size="s-sm"
                    color={transaction.type === "Income" ? "success" : "danger"}
                    variant="flat"
                  >
                    {transaction.type}
                  </Button>
                </TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>
                  <Button
                    size="s-sm"
                    color={transaction.status === "Completed"
                      ? "success"
                      : "warning"}
                    variant="flat"
                  >
                    {transaction.status}
                  </Button>
                </TableCell>
              </TableRow>
            {/each}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  </Flex>
</Page>
