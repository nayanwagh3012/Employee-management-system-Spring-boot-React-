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
-- Table structure for table `professional_details`
--

DROP TABLE IF EXISTS `professional_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `professional_details` (
  `company_email` varchar(255) NOT NULL,
  `date_of_joining` date NOT NULL,
  `designation` varchar(255) NOT NULL,
  `hr_name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `office_address` varchar(255) NOT NULL,
  `reporting_manager` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `employee_id` bigint NOT NULL,
  PRIMARY KEY (`employee_id`),
  CONSTRAINT `FK7guie97pbwpxhxi76cdqlmjgb` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `professional_details`
--

LOCK TABLES `professional_details` WRITE;
/*!40000 ALTER TABLE `professional_details` DISABLE KEYS */;
INSERT INTO `professional_details` VALUES ('john.doe@example.com','2024-04-09','Senior Developer','HR Manager','New York','123 Main Street','Jane Smith','Software Engineer',12025),('shreya@xyz.com','2024-04-06','sw dev','Akash','pune','pune','pavan','sw dev',12026),('vikas@gmail.com','2024-04-05','pkkpkpkp','momomom','mmomomoo','mmmoomo','kokoko','okokpkpk',12028),('jnnu@ij.uhu','2024-04-04','ybhbhbhg','njnkjnj','jknknk','njnj','jknjj','jiyhyy',12030),('jnkjnnhjby@hbb.ni','2024-04-10','jnkjnn','mkmkm','kmklmkmmm','klmm','ommkmkm','njnjnkknkj',12031),('karan@xyz.com','2024-03-04','sw dev','pavan','pune','pune','akash','sw dev',12048),('bhbhb@bh.nj','2024-03-10','vhghgv','nnjnjnkn','nnjj','njnjnj','njnjj','gvgv',151548);
/*!40000 ALTER TABLE `professional_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-21 14:32:26
