-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: dev_apologies
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
-- Table structure for table `apology`
--

DROP TABLE IF EXISTS `apology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apology` (
  `id` int NOT NULL AUTO_INCREMENT,
  `http_code_id` int NOT NULL,
  `tag_id` int NOT NULL,
  `message` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_91F3852C22C1DBDC` (`http_code_id`),
  KEY `IDX_91F3852CBAD26311` (`tag_id`),
  CONSTRAINT `FK_91F3852C22C1DBDC` FOREIGN KEY (`http_code_id`) REFERENCES `http_code` (`id`),
  CONSTRAINT `FK_91F3852CBAD26311` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apology`
--

LOCK TABLES `apology` WRITE;
/*!40000 ALTER TABLE `apology` DISABLE KEYS */;
INSERT INTO `apology` VALUES (1,1,1,'Meh'),(2,2,1,'Emacs'),(3,3,1,'Explosion'),(4,4,1,'Goto Fail'),(5,5,1,'I wrote the code and missed the necessary validation by an oversight (see 795)'),(6,6,1,'Delete Your Account'),(7,7,1,'Can\'t quit vi'),(8,8,2,'PHP'),(9,9,2,'Convenience Store'),(10,10,2,'NoSQL'),(11,11,2,'I am not a teapot'),(12,12,2,'Haskell'),(13,13,3,'Unpossible'),(14,14,3,'Known Unknowns'),(15,15,3,'Unknown Unknowns'),(16,16,3,'Tricky'),(17,17,3,'This line should be unreachable'),(18,18,3,'It works on my machine'),(19,19,3,'It\'s a feature, not a bug'),(20,20,3,'32 bits is plenty'),(21,21,3,'It works in my timezone'),(22,22,4,'Fucking npm'),(23,23,4,'Fucking Rubygems'),(24,24,4,'Fucking Unic�de'),(25,25,4,'Fucking Deadlocks'),(26,26,4,'Fucking Deferreds'),(27,27,4,'Fucking Race Conditions'),(28,28,4,'Fucking IE'),(29,29,4,'FuckThreadsing'),(30,30,4,'Fucking Exactly-once Delivery'),(31,31,4,'Fucking Windows'),(32,30,4,'Fucking Exactly'),(33,31,4,'Fucking McAfee'),(34,32,5,'Didn\'t bother to compile it'),(35,33,5,'Syntax Error'),(36,34,5,'Too many semi-colons'),(37,35,5,'Not enough semi-colons'),(38,36,5,'Insufficiently polite'),(39,37,5,'Excessively polite'),(40,38,5,'Unexpected `T_PAAMAYIM_NEKUDOTAYIM`'),(41,39,6,'Hungover'),(42,40,6,'Stoned'),(43,41,6,'Under-Caffeinated'),(44,42,6,'Over-Caffeinated'),(45,43,6,'Railscamp'),(46,44,6,'Sober'),(47,45,6,'Drunk'),(48,46,6,'Accidentally Took Sleeping Pills Instead Of Migraine Pills During Crunch Week'),(49,47,7,'Cached for too long'),(50,48,7,'Not cached long enough'),(51,49,7,'Not cached at all'),(52,50,7,'Why was this cached?'),(53,51,7,'Out of cash'),(54,52,7,'Error on the Exception'),(55,53,7,'Coincidence'),(56,54,7,'Off By One Error'),(57,55,7,'Off By Too Many To Count Error'),(58,56,8,'Project owner not responding'),(59,57,8,'Operations'),(60,58,8,'QA'),(61,59,8,'It was a customer request, honestly'),(62,60,8,'Management, obviously'),(63,61,8,'TPS Cover Sheet not attached'),(64,62,8,'Try it now'),(65,63,8,'Further Funding Required'),(66,64,8,'Designer\'s final designs weren\'t'),(67,65,8,'Not my department'),(68,66,9,'The Internet shut down due to copyright restrictions'),(69,67,9,'Climate change driven catastrophic weather event'),(70,68,9,'Zombie Apocalypse'),(71,69,9,'Someone let PG near a REPL'),(72,70,9,'#heartbleed (see 705)'),(73,71,9,' Some DNS fuckery idno'),(74,72,9,'This is the last page of the Internet. Go back'),(75,73,9,'I checked the db backups cupboard and the cupboard was bare'),(76,74,9,'End of the world');
/*!40000 ALTER TABLE `apology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `http_code`
--

DROP TABLE IF EXISTS `http_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `http_code` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` smallint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_D6BFE61F77153098` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `http_code`
--

LOCK TABLES `http_code` WRITE;
/*!40000 ALTER TABLE `http_code` DISABLE KEYS */;
INSERT INTO `http_code` VALUES (1,701),(2,702),(3,703),(4,704),(5,705),(6,706),(7,707),(8,710),(9,711),(10,712),(11,718),(12,719),(13,720),(14,721),(15,722),(16,723),(17,724),(18,725),(19,726),(20,727),(21,728),(22,730),(23,731),(24,732),(25,733),(26,734),(27,735),(28,736),(29,737),(30,738),(31,739),(32,750),(33,753),(34,754),(35,755),(36,756),(37,757),(38,759),(39,761),(40,762),(41,763),(42,764),(43,765),(44,766),(45,767),(46,768),(47,771),(48,772),(49,773),(50,774),(51,775),(52,776),(53,777),(54,778),(55,779),(56,780),(57,781),(58,782),(59,783),(60,784),(61,785),(62,786),(63,787),(64,788),(65,789),(66,791),(67,792),(68,793),(69,794),(70,795),(71,796),(72,797),(73,798),(74,799);
/*!40000 ALTER TABLE `http_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'Inexcusable'),(2,'Novelty Implementations'),(3,'Edge Cases'),(4,'Fucking'),(5,'Syntax Errors'),(6,'Substance'),(7,'Predictable Problems'),(8,'Somebody Else\'s Problem'),(9,'Internet crashed');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-27 21:18:40
