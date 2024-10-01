---
sidebar_label: 'What is HPE NonStop?'
sidebar_position: 1
---
# What is HPE NonStop?

HPE NonStop is an integrated hardware and software solution that has been designed and built to **survive the loss of components is considered to be critical to other systems**.

It is a self-healing platform, with the ability to reconfigure itself in the case of failure. HPE NonStop, or Tandem, as it is favourably remembered - is used by organizations who need their systems to be always on.

## You'd probably have interacted with a NonStop lately...
Our HPE NonStop servers have been around for more than 50 years, and are the backbone of core systems that we don't think twice about using today.

Immigration, manufacturing, ATMs and point-of-sale systems (POS), all depend on HPE NonStop to reduce global downtime to a couple of seconds of unplanned downtime a year.

## What's so special about the workloads that the NonStop handles?
The exponential increase in data generated demands for mission-critical data to be **have data integrity and availability**. This means that the data generated has to be consistent and available at any point in time.

In the industry, operations on such data is known as a transaction - either the entire operation happens, or nothing happens. For example, either money is withdrawn from your savings account, and dispensed at the ATM you're getting it from, or nothing happens at all. 

The system either performs all the steps required to complete the transaction, or none of them - **transactions are the lifeblood of corporations.**

### TACL: Your Command Interface

Once connected, you'll interact with the system using TACL (Tandem Advanced Command Language). TACL is the primary command-line interface for Guardian.

Here are some basic TACL commands to get you started:

- `LOGON [username]`: Log into the system
- `VOLUME [$disk.subvolume]`: Change the current subvolume
- `FILES`: List files in the current subvolume
- `TYPE`: Display the contents of a file
- `EDIT`: Open the text editor to create or modify files
- `RUN`: Execute a program
- `HELP`: Display help information for commands

### File System Structure

Guardian uses a hierarchical file system structure:

- System: The top level, represented by a backslash ($$
- Volume: A disk or logical partition, e.g., $DATA
- Subvolume: A directory-like structure within a volume
- File: Individual files within a subvolume

A full file name might look like this: \SYSTEM.$DATA.MYSUBVOL.MYFILE

### Process Management

Guardian processes are identified by a process name or a process ID. Use the `STATUS` command to view running processes and the `STOP` command to terminate a process.

### Security

Guardian uses a robust security model. Users are assigned to user groups, and access to files and other system resources is controlled through access control lists (ACLs).

### Developing Applications

For application development, Guardian supports various programming languages, including COBOL, C, C++, and Java. The specific development environment will depend on your chosen language and tools.

### Monitoring and Management

Guardian provides several tools for system monitoring and management:

- Measure: Performance monitoring subsystem
- Pathway: Transaction processing environment
- TMF (Transaction Management Facility): For managing distributed transactions

As you become more familiar with Guardian, you'll discover its powerful features for ensuring high availability, scalability, and data integrity in mission-critical environments.

Remember, this is just a starting point. HPE provides comprehensive documentation and training resources to help you master the NonStop Guardian environment.

### Citations:

[1] https://img1.wsimg.com/blobby/go/9a32841c-0d54-4ad0-8acd-a5b15c41cae1/downloads/jajorogatilaneba.pdf

[2] https://www.hpe.com/us/en/collaterals/collateral.a50005133enw.html

[3] https://gtug.de/Download/Tagungen/2019_05/Bernhard%20-%20GTUG%20May%202019%20final%20external.pdf

[4] https://docs.oracle.com/en/middleware/goldengate/non-stop/12.3.0.1/reference/reference-guide-oracle-goldengate-hp-nonstop-guardian.pdf

[5] http://www.nonstoptools.com/manuals/Guardian-Operations-Guide.pdf


<!-- # Getting Started

## Platform
- Logging into the TACL System
- Logging into OSS
- Navigating subsystems
    - File Systems
        - FUP
        - Overview of NonStop DB (Enscribe) - link it below
        - link to the page in documentation
    - Monitoring and System Analytics - MEASURE
    - Subsystem Managements - Subsystem Control Facility (SCF)
    - User Authentication - SAFECOM
    - Containerisation - PATHCOM (referenced later)
- Starting and Stopping Programs

## Database
### SQL/MX
- Logging into CLI
- CRUD
- ACID Properties 
- **WebDBS

### SQL/MP
- Logging into CLI
- CRUD

### Enscribe
- CRUD
- API Based Access - CRUD 
    <!-- - J Toolkit - key seq, queue seq and entry seq - CRUD using Java
    - J Cache -  -->

<!-- ## Middleware
Layer that works between the Database and Platform
- TS/MP (containerisation)
- Java Middleware
- JEE Containers
- TMF


## Development Environment
- NSDEE - language compilers and runtimes
- NSDevEnv (on Cloud)
- NSDevOps --> -->