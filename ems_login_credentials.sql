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
-- Table structure for table `login_credentials`
--

DROP TABLE IF EXISTS `login_credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_credentials` (
  `employee_id` bigint NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `UK_rnqoossostrlnk89gq0dibgst` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_credentials`
--

LOCK TABLES `login_credentials` WRITE;
/*!40000 ALTER TABLE `login_credentials` DISABLE KEYS */;
INSERT INTO `login_credentials` VALUES (12025,'Ram@9865','ram@gmail.com'),(12026,'',''),(12027,'Sagar@7895','sagar@gmail.com'),(12028,'okji@9192','vikas@gmail.com'),(12029,'shruti2gmail.com','Shruti@8986'),(12030,'iuub@9984','jnnu@ij.uhu'),(12031,'nkkn@4984','jnkjnnhjby@hbb.ni'),(12032,'mkmm@9080','nnjnj@uuhu.nini'),(12033,'buyb@8484','bhhbb@hgh.vhg'),(12034,'fgfg@7879','fgffgggf@gghg.fgfg'),(12048,'Kara@9080','karan@gmail.com'),(18844,'njni@9080','hbbvt@bgvv.nn'),(151548,'bgvg@8080','bhbhb@bh.nj');
/*!40000 ALTER TABLE `login_credentials` ENABLE KEYS */;
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
