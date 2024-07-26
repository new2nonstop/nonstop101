---
sidebar_label: 'Technical Architecture'
sidebar_position: 2
---

# NonStop Technical Architecture

NonStop systems, developed by Hewlett Packard Enterprise, are designed for environments that require continuous availability and fault tolerance. This article delves into the technical architecture of NonStop systems, highlighting their unique features and components.

# Core Architecture

NonStop systems employ a loosely-coupled cluster of processors connected by a high-speed bus known as ServerNet. This architecture is fundamental to the system's fault tolerance and scalability.

## Key Features:
- **Shared-Nothing Architecture**: Each processor operates independently without sharing memory, enhancing fault isolation and system robustness.

- **ServerNet**: A high-speed interconnect that provides redundant paths between system components, ensuring continuous communication even if one path fails.

# NonStop Advanced Architecture (NSAA)
The NonStop Advanced Architecture (NSAA) represents an evolution in the platform's design, emphasizing modular redundancy and the use of standard hardware components.
- **Modular Redundancy**: NSAA systems can be configured with dual or triple modular redundancy, enhancing fault tolerance by ensuring that multiple copies of critical components are available.

- **Standard Hardware Integration**: NSAA leverages standard HPE's 4-way SMP Xeon server modules, combining off-the-shelf hardware with NonStop's robust software architecture.

# Processor and Memory Management
NonStop systems utilize a distributed processing model to ensure continuous operation:
- **Multiple Processors**: Each processor runs its own copy of the NonStop OS, allowing the system to scale horizontally by adding more processors.
- **Process Pairs**: Critical processes are run as primary and backup pairs on different processors. In case of a failure, the backup process seamlessly takes over, ensuring no interruption in service.

# I/O Subsystem
The I/O subsystem in NonStop systems is designed for high performance and reliability:
- **Redundant Paths**: Multiple I/O adapters and storage devices are interconnected to prevent single points of failure.
- **Dynamic Load Balancing**: The system automatically distributes I/O operations across available resources for optimal performance.

# Software Components
The software stack is integral to the NonStop architecture, providing the necessary tools for fault-tolerant operations:
1. **NonStop OS**: A fault-tolerant operating system that supports process pairs and ensures data integrity during failovers. It includes the Guardian layer and the Open System Services (OSS) personality, which provides a Unix-like interface.

2. **NonStop SQL**: A distributed, parallel database management system optimized for high-performance transaction processing.
3. **Middleware**: Components like Pathway for transaction processing and NonStop Server for Java for running Java applications.

# Manageability and Monitoring
NonStop systems include robust tools for system management and monitoring:
- **Subsystem Control Facility (SCF)**: A command-line interface for configuring and managing NonStop subsystems.
Measure: A subsystem for performance measurement and analysis.
- **Safeguard**: Provides security management and access control features.

# Scalability
The NonStop architecture is designed to scale seamlessly:
- **Horizontal Scaling**: Additional processors can be added to increase system capacity without disrupting operations.
- **Vertical Scaling**: Support for more powerful processors and increased memory capacity within each node.

# Conclusion
The NonStop technical architecture combines hardware redundancy, distributed processing, and specialized software components to create a system capable of continuous operation even in the face of hardware failures or software errors. This unique design makes NonStop systems ideal for applications in finance, telecommunications, and other industries where downtime can have severe consequences.

By leveraging standard hardware components within a fault-tolerant framework, the NonStop Advanced Architecture continues to evolve, providing cutting-edge performance while maintaining the platform's legendary reliability and availability.