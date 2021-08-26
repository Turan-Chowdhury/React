-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2021 at 11:50 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel-react`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_02_04_192429_create_projects_table', 1),
(5, '2021_02_04_192451_create_tasks_table', 1),
(6, '2021_02_04_193907_create_tasks_table', 2),
(7, '2016_06_01_000001_create_oauth_auth_codes_table', 3),
(8, '2016_06_01_000002_create_oauth_access_tokens_table', 3),
(9, '2016_06_01_000003_create_oauth_refresh_tokens_table', 3),
(10, '2016_06_01_000004_create_oauth_clients_table', 3),
(11, '2016_06_01_000005_create_oauth_personal_access_clients_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('035adfad295f525aa2f19ffe46f5c9cabf5b308d38347729351a10ab18e62bfdaca854bb3709ef4c', 1, 3, 'authToken', '[]', 0, '2021-02-14 06:34:00', '2021-02-14 06:34:00', '2021-08-14 12:34:00'),
('0a1f15a7d58fa5c09918d59fe0f0086bbdefd33331d3b1ee3d59c36b1f69a27086e8064ea42e77ad', 1, 3, 'authToken', '[]', 0, '2021-02-15 08:17:01', '2021-02-15 08:17:01', '2021-08-15 14:17:00'),
('0df5fe5610c0da050fc7d2dd68dcc6694eb207a6059170fa9432f144a2bec818118af2cb6b83e7a1', 1, 3, 'authToken', '[]', 0, '2021-02-15 09:55:49', '2021-02-15 09:55:49', '2021-08-15 15:55:48'),
('11e8a08e19a0437b9af97f8ede3bbc171086d2ab844684331176fdbe2643cfa8862359003fe1b5c0', 1, 3, 'authToken', '[]', 0, '2021-02-15 02:06:16', '2021-02-15 02:06:16', '2021-08-15 08:06:16'),
('12ca18f192cff346009e6d92f91d6bab58177b0b07b43364758c4991133c7463cf71de7fb593a624', 1, 3, 'authToken', '[]', 0, '2021-02-15 09:45:56', '2021-02-15 09:45:56', '2021-08-15 15:45:56'),
('2589df68b4dabf4f8e96701a0642be6fa311e307b0bf921490ae00492abf33fe59484800ab604f62', 1, 3, 'authToken', '[]', 0, '2021-02-15 01:58:06', '2021-02-15 01:58:06', '2021-08-15 07:58:06'),
('258ed6489f59803594ea717dcddcab0efdc8ee5ffccc12dec19f4bd165f95ae2eca9b9301c66907c', 1, 3, 'authToken', '[]', 0, '2021-02-15 09:45:15', '2021-02-15 09:45:15', '2021-08-15 15:45:15'),
('2799b91b15a8f4be9aae3d3478b7944b644a6abe6665f8d69a11eabd18c3bd1eaed3bcbac02417ff', 1, 3, 'authToken', '[]', 0, '2021-02-15 08:17:10', '2021-02-15 08:17:10', '2021-08-15 14:17:10'),
('2dc895b4316f9f422e06acc62c0cf30373daf0d054f40990ecf734e520be5a473ea21fc4a663c98e', 1, 3, 'Token Name', '[]', 0, '2021-02-13 11:33:48', '2021-02-13 11:33:48', '2021-08-13 17:33:48'),
('487fcc3c8b27280c05f2bdffae6790f19e27c780a268a0bead063c16c2005bac01664ff379e68872', 1, 3, 'authToken', '[]', 0, '2021-02-14 05:21:04', '2021-02-14 05:21:04', '2021-08-14 11:21:04'),
('577ab91094296d1510199f69d508444409d2a52d90bccc57b536d32f87ed8707e947bf337a18fb1b', 1, 3, 'Token Name', '[]', 0, '2021-02-13 11:33:51', '2021-02-13 11:33:51', '2021-08-13 17:33:51'),
('5bdf9724d49b3d62cef368436c0c0213cfbc8feb0b1e73f33595c7a8f006f742c9f0a266dc23cc6a', 1, 3, 'authToken', '[]', 0, '2021-02-15 10:51:09', '2021-02-15 10:51:09', '2021-08-15 16:51:09'),
('5f30e4c751d744fced2a3656db66a26badea84efd1b99391f03a16b5e17237fd7553673ec84c1960', 1, 3, 'Token Name', '[]', 0, '2021-02-13 11:31:18', '2021-02-13 11:31:18', '2022-02-13 17:31:18'),
('61068012504391392475d19da475344671860cf81f0e019d9d2f82af24bba239b83ddbd3ef318a9e', 1, 3, 'authToken', '[]', 0, '2021-02-15 10:49:35', '2021-02-15 10:49:35', '2021-08-15 16:49:35'),
('6266c48c9fb9f3410fb84a5c77ec8afe16b2fc80d304afc501ea849f476720354911924a6538b950', 1, 3, 'authToken', '[]', 0, '2021-02-15 10:51:29', '2021-02-15 10:51:29', '2021-08-15 16:51:29'),
('627b58e2394ea0b554de5b80f97b385842bff4879a725ea1b95fdb40def08d7c1f3244694b0bf088', 1, 3, 'Token Name', '[]', 0, '2021-02-13 11:33:52', '2021-02-13 11:33:52', '2021-08-13 17:33:52'),
('64b77cc5f5615c1d0d3c125ca7ae197dbe9ff54ef6589eb38fe5f2cd4d2e082bfeb5039c9a89edb4', 1, 3, 'authToken', '[]', 0, '2021-02-15 01:40:36', '2021-02-15 01:40:36', '2021-08-15 07:40:35'),
('71275db4f7af91475d267d585805e617997a9fd0f299f50357e301e9d177445c638bd0b17c0d3464', 1, 3, 'authToken', '[]', 0, '2021-02-14 06:41:00', '2021-02-14 06:41:00', '2021-08-14 12:41:00'),
('79da2762c0c0c792c73bca133d76812d82299968210f19625149fe21a3cd1f01bb5f70e112521d27', 1, 3, 'authToken', '[]', 0, '2021-02-15 10:55:23', '2021-02-15 10:55:23', '2021-08-15 16:55:23'),
('7d7d6e67d5a84538ed12fd1e25a1a96a2412f42d7d8716a74e3da4c219610f553a6d9416d546fec7', 1, 3, 'authToken', '[]', 0, '2021-02-14 06:38:52', '2021-02-14 06:38:52', '2021-08-14 12:38:51'),
('7dee725422d015c026326a5f52799760a751df7c41b6c4155c8f5ce36e6f8c55b81c8556f4d0e233', 1, 3, 'authToken', '[]', 0, '2021-02-15 05:41:51', '2021-02-15 05:41:51', '2021-08-15 11:41:50'),
('8465c94f3eff055c7024d697061a0291e2aae1ea41d4b7a635be3ffd72cb2db7c3e7296312efc724', 1, 3, 'authToken', '[]', 0, '2021-02-15 10:47:41', '2021-02-15 10:47:41', '2021-08-15 16:47:41'),
('86a10e89b25f7eb57d0ed2b9460d638a88880e6ed221635dd3350cb67fd3fd7d98e61e45283c9241', 1, 3, 'Token Name', '[]', 0, '2021-02-13 11:33:55', '2021-02-13 11:33:55', '2021-08-13 17:33:55'),
('87ec72466d79b923ac4a818cb1a680fb5117fbf69e974889751f8510e0e0823179e478574de550a4', 1, 3, 'authToken', '[]', 0, '2021-02-14 06:43:15', '2021-02-14 06:43:15', '2021-08-14 12:43:15'),
('8ddae62c0d750739c876002ac9e5a06338d128f32e9781e24a41bc74da6f975bf227adf5dd8c0aff', 1, 3, 'Token Name', '[]', 0, '2021-02-13 11:33:50', '2021-02-13 11:33:50', '2021-08-13 17:33:50'),
('9ff199449619ab823836b25f94f780f2dac3b8acf796e00c75d727a9a94fe797990db33b4be39283', 1, 3, 'authToken', '[]', 0, '2021-02-15 08:17:34', '2021-02-15 08:17:34', '2021-08-15 14:17:33'),
('a09c5142d2bd352d8b599745dec9de0572feea7504d0acb9629cbe90cbbf73814d7304d5e956dbd1', 1, 3, 'authToken', '[]', 0, '2021-02-15 10:22:36', '2021-02-15 10:22:36', '2021-08-15 16:22:36'),
('a50caf7fe37fefc54e9b6cb2d6a18424bf789409b9d28caaf9bb5c3d8b4dfacbe20d31f52107ef20', 1, 3, 'authToken', '[]', 0, '2021-02-15 10:50:38', '2021-02-15 10:50:38', '2021-08-15 16:50:38'),
('a959b968170cd56d4bf2fa2a885b97d1202312eece80d0a92e5a641c7067b2c715b0049748f36d7c', 2, 3, 'authToken', '[]', 0, '2021-02-14 06:36:50', '2021-02-14 06:36:50', '2021-08-14 12:36:50'),
('b1b6504b685d7fdfed04b14c273cebe7f48c86ff733280017f4dd1567da97b0ff5489f48b18de156', 4, 3, 'authToken', '[]', 0, '2021-02-14 10:46:38', '2021-02-14 10:46:38', '2021-08-14 16:46:37'),
('b67f2878bd372559b1d252542227178f8364018509f2a77e7a2f0ae6f68bcead17d545e377c7e7ad', 1, 3, 'authToken', '[]', 0, '2021-02-15 05:42:00', '2021-02-15 05:42:00', '2021-08-15 11:42:00'),
('be584dbcde343634668b3bb6aa4a73c77b0505f51a16483f3589b13cda3f18a231e109e240e9e7ae', 1, 3, 'authToken', '[]', 0, '2021-02-15 10:24:25', '2021-02-15 10:24:25', '2021-08-15 16:24:24'),
('cb99603f22dc20f7a4bd4cb34eb99c058cfbf9bf4528df3b4ee198b08cd2e5e3d5110187e76f2809', 1, 3, 'authToken', '[]', 0, '2021-02-14 06:37:35', '2021-02-14 06:37:35', '2021-08-14 12:37:35'),
('d00c1b82d08422525e449f4bd155970b831bdbfa018facf153840e7f69b3be40f52ee005f8f1c298', 6, 3, 'authToken', '[]', 0, '2021-02-14 10:51:43', '2021-02-14 10:51:43', '2021-08-14 16:51:42'),
('dbd2cd938cdb3ca4772effb7517eecb4ea116b8d790edfb70e93e44bf7f9780f35c7841835acf7b1', 1, 3, 'authToken', '[]', 0, '2021-02-15 11:12:02', '2021-02-15 11:12:02', '2021-08-15 17:12:02'),
('e1171f7588b5772cdd064f20435aa3d6ba5da63c6beaa625e9607d62cf6b9efa8aa7fbb9cc6384e9', 1, 3, 'authToken', '[]', 0, '2021-02-15 08:10:05', '2021-02-15 08:10:05', '2021-08-15 14:10:03'),
('e86470952408859243f7f5cd3a5f268b4609f27cafb4394a5a5d3a4a4afacc9d749b5993da513a88', 1, 3, 'authToken', '[]', 0, '2021-02-15 09:56:50', '2021-02-15 09:56:50', '2021-08-15 15:56:50'),
('e88a137a98a35bdfd41b3ab3cd46af4b5cbd864d6bfbc97081e11cac1e0696058fa2aa9c22a92328', 1, 3, 'Token Name', '[]', 0, '2021-02-13 11:33:54', '2021-02-13 11:33:54', '2021-08-13 17:33:54'),
('eec8d4edd2758b5c0851c3b4747364c42dc01ca7ab45a74e157bc95cefa3fc6e87443773f8882a58', 1, 3, 'authToken', '[]', 0, '2021-02-15 09:55:31', '2021-02-15 09:55:31', '2021-08-15 15:55:31'),
('f0ca7bf94d12593719e2fce635fea868562caa2ab13a94633d39acae8fe97448efb68e66b155eb3a', 1, 3, 'authToken', '[]', 0, '2021-02-15 09:47:16', '2021-02-15 09:47:16', '2021-08-15 15:47:16'),
('f8185172ddf6d67ad7d2169790cb8620e883467ede1ca8ac3b389358dd8770acf85a4550f8a54d62', 5, 3, 'authToken', '[]', 0, '2021-02-14 10:49:03', '2021-02-14 10:49:03', '2021-08-14 16:49:03'),
('f93c73b3d257c50105309930458b24c8205e04c6c96301c1da17c42d7abea2878b912585c0112c52', 3, 3, 'authToken', '[]', 0, '2021-02-14 06:41:28', '2021-02-14 06:41:28', '2021-08-14 12:41:28'),
('fbd4e1aed53601e1ff6d0fe6df9809143d491768eff3d3dfb40704068212e0b50381da7466629cbf', 1, 3, 'authToken', '[]', 0, '2021-02-15 11:16:30', '2021-02-15 11:16:30', '2021-08-15 17:16:30'),
('fe58fe0a27b7bc76a8cab9c860839b10bdbfba94b13ef50d7495bfdf58f475ea5f28efe7e4ec3e24', 1, 3, 'authToken', '[]', 0, '2021-02-15 09:57:09', '2021-02-15 09:57:09', '2021-08-15 15:57:09');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'L2JEZ0SmZfquZzYzWGOjVsikuawiV5b6M0C3XlfL', NULL, 'http://localhost', 1, 0, 0, '2021-02-13 10:18:58', '2021-02-13 10:18:58'),
(2, NULL, 'Laravel Password Grant Client', 'ytdrDdna0hZM01C5EKZt0WpUJOgT9v10EHOfS8DG', 'users', 'http://localhost', 0, 1, 0, '2021-02-13 10:18:58', '2021-02-13 10:18:58'),
(3, NULL, 'authToken', 'ITgeu1fFmwwCQjVQuNcT5sqdM0cw6ZdrMGvF7nrK', NULL, 'http://localhost', 1, 0, 0, '2021-02-13 10:45:15', '2021-02-13 10:45:15');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-02-13 10:18:58', '2021-02-13 10:18:58'),
(2, 3, '2021-02-13 10:45:15', '2021-02-13 10:45:15');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=>incomplete, 1=>complete',
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(3, 'Our first Project', 'Start dummy laravel project using laravel Rest API', 1, 1, '2021-02-05 10:52:20', '2021-02-05 10:52:20'),
(8, 'test5', 'test5 description', 0, 1, '2021-02-07 13:24:25', '2021-02-07 13:24:25'),
(13, 'Project Uprdated', 'fgdg df3453thgtfthg', 1, 1, '2021-02-08 11:31:27', '2021-02-12 09:59:05');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0=>incomplete, 1=>complete',
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `description`, `status`, `project_id`, `created_at`, `updated_at`) VALUES
(7, 'test task updated', 'test task description', 0, 3, '2021-02-05 12:39:47', '2021-02-05 12:44:22'),
(10, 'new task', 'fkdjsf kfjsdfj kfjsdkf', 0, 3, '2021-02-10 11:49:57', '2021-02-10 11:49:57'),
(11, 'tesghg', 'test task description ghkgkjg', 0, 3, '2021-02-10 11:57:55', '2021-02-10 11:57:55'),
(12, 'turan task', 'kdjf hfdsfjs hfsdkfh fsdfkjlsdf', 0, 3, '2021-02-10 12:04:15', '2021-02-10 12:04:15'),
(13, 'new', 'djfksdkjf sjfs kdfj', 0, 3, '2021-02-10 12:06:11', '2021-02-10 12:06:11'),
(14, 'task 1', 'task desc kdf fgjdsf', 1, 13, '2021-02-10 12:14:13', '2021-02-12 11:18:09'),
(15, 'tesghg kjkjk', 'test task description ghkgkjg', 0, 3, '2021-02-10 12:15:51', '2021-02-10 12:15:51'),
(16, 'final trask', 'fsdf dfjsdf sdfdsf fsd', 0, 13, '2021-02-10 12:17:59', '2021-02-12 11:17:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'turan', 'turanchowdhury01@gmail.com', NULL, '$2y$10$2VFpGJqsOJQGCXBs9aofauoqGmqqNNLmPGd2f17i2UGLXeIchKrli', NULL, '2021-02-05 00:13:55', '2021-02-05 00:13:55'),
(2, 'turan', 'turanchowdhury@gmail.com', NULL, '123', NULL, '2021-02-14 06:36:50', '2021-02-14 06:36:50'),
(3, 'admin', 'turan@gmail.com', NULL, '123', NULL, '2021-02-14 06:41:28', '2021-02-14 06:41:28'),
(4, 'asif', 'turan01@gmail.com', NULL, '123', NULL, '2021-02-14 10:46:38', '2021-02-14 10:46:38'),
(5, 'test5', 'turan5@gmail.com', NULL, '123', NULL, '2021-02-14 10:49:03', '2021-02-14 10:49:03'),
(6, 'Turan', 'turanchowdhury0101@gmail.com', NULL, '123', NULL, '2021-02-14 10:51:43', '2021-02-14 10:51:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_user_id_foreign` (`user_id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_project_id_foreign` (`project_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
