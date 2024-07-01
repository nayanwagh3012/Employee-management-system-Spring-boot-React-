-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: ems
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `project_details`
--

DROP TABLE IF EXISTS `project_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_details` (
  `project_id` bigint NOT NULL,
  `client_name` varchar(255) NOT NULL,
  `description` text,
  `end_date` date DEFAULT NULL,
  `proj_name` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `employee_id` bigint DEFAULT NULL,
  PRIMARY KEY (`project_id`),
  KEY `FK_project_details_employee_id` (`employee_id`),
  CONSTRAINT `FK_project_details_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_details`
--

LOCK TABLES `project_details` WRITE;
/*!40000 ALTER TABLE `project_details` DISABLE KEYS */;
INSERT INTO `project_details` VALUES (3025,'ABC Company','This is a new project description.','2024-05-03','New Project aaa','2024-04-10',12025),(3645,'new client','project desc','2024-05-10','first project','2024-04-11',NULL),(4856,'name2','project desc','2024-04-30','project1','2024-04-10',12048),(48448,'bhbh','hbhhjj','2024-05-09','bbhhb','2024-04-04',NULL),(55151,'bhjhbhjb','hbhh','2024-04-30','hbhjb','2024-04-20',NULL),(155848,'bhbhhbh','hhbh','2024-04-21','bhbhhh','2024-04-12',NULL),(656565,'vyvyvy','vyvyyv','2024-04-30','yvyvyvyv','2024-04-20',12028),(661165,'jhjbbh',' vvffcfc','2024-05-07','hbjhbhj','2024-04-21',NULL),(2515151,'bhbbb','hbhbh','2024-05-08','hbhbhb','2024-04-12',NULL);
/*!40000 ALTER TABLE `project_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-21 14:32:25
