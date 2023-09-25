import bacieczki from './Photo/Search/Result/StopsDownload/bacieczki.pdf';
import castorama from './Photo/Search/Result/StopsDownload/castorama.pdf';
import chraboly from './Photo/Search/Result/StopsDownload/chraboly.pdf';
import czechowizna from './Photo/Search/Result/StopsDownload/czechowizna.pdf';
import czechPKP from './Photo/Search/Result/StopsDownload/czechPKP.pdf';
import dobrzyniewo from './Photo/Search/Result/StopsDownload/dobrzyniewo.pdf';
import dworcowa from './Photo/Search/Result/StopsDownload/dworcowa.pdf';
import dworzecpkp from './Photo/Search/Result/StopsDownload/dworzecpkp.pdf';
import dworzecpks from './Photo/Search/Result/StopsDownload/dworzecpks.pdf';
import dziekonie from './Photo/Search/Result/StopsDownload/dziekonie.pdf';
import dzikie from './Photo/Search/Result/StopsDownload/dzikie.pdf';
import fasty from './Photo/Search/Result/StopsDownload/fasty.pdf';
import gnila from './Photo/Search/Result/StopsDownload/gnila.pdf';
import goniadzka from './Photo/Search/Result/StopsDownload/goniadzka.pdf';
import jp2 from './Photo/Search/Result/StopsDownload/jp2.pdf';
import kolonia from './Photo/Search/Result/StopsDownload/kolonia.pdf';
import kombinat from './Photo/Search/Result/StopsDownload/kombinat.pdf';
import kozince from './Photo/Search/Result/StopsDownload/kozince.pdf';
import krynice from './Photo/Search/Result/StopsDownload/krynice.pdf';
import lesna from './Photo/Search/Result/StopsDownload/lesna.pdf';
import mysliwiec from './Photo/Search/Result/StopsDownload/mysliwiec.pdf';
import obrubniki from './Photo/Search/Result/StopsDownload/obrubniki.pdf';
import rynek from './Photo/Search/Result/StopsDownload/rynek.pdf';
import skrzyzowanie from './Photo/Search/Result/StopsDownload/skrzyzowanie.pdf';
import wojpolskiego from './Photo/Search/Result/StopsDownload/wojpolskiego.pdf';

export const busStops = [
    {
        id: 1,
        name: 'Mońki–Dworcowa',
        Białystok: ['4:20', '5:05', '6:30', '7:25', '9:00', '10:00', '11:20', '12:15', '13:35', '14:30', '15:45', '17:00', '18:05', '19:20'],
        Mońki: ['6:17', '7:12', '8:32', '9:32', '11:07', '12:07', '13:22', '14:22', '15:32', '16:37', '17:47', '19:07', '20:02', '21:17'],
        download: dworcowa,
    },
    {
        id: 2,
        name: 'Mońki–Al.Wojs.Pol',
        Białystok: ['4:23', '5:08', '6:33', '7:28', '9:03', '10:03', '11:23', '12:18', '13:38', '14:33', '15:48', '17:03', '18:08', '19:23'],
        Mońki: ['6:15', '7:10', '8:30', '9:30', '11:05', '12:05', '13:20', '14:20', '15:30', '16:35', '17:45', '19:05', '20:00', '21:15'],
        download: wojpolskiego,
    },
    {
        id: 3,
        name: 'Mońki-Leśna',
        Białystok: ['4:25', '5:10', '6:35', '7:30', '9:05', '10:05', '11:25', '12:20', '13:40', '14:35', '15:50', '17:05', '18:10', '19:25'],
        Mońki: ['6:12', '7:07', '8:27', '9:27', '11:02', '12:02', '13:17', '14:17', '15:27', '16:32', '17:42', '19:02', '19:57', '21:12'],
        download: lesna,
    },
    {
        id: 4,
        name: 'Dziękonie',
        Białystok: ['4:29', '5:14', '6:39', '7:34', '9:09', '10:09', '11:29', '12:24', '13:44', '14:39', '15:54', '17:09', '18:14', '19:29'],
        Mońki: ['6:08', '7:03', '8:23', '9:23', '10:58', '11:58', '13:13', '14:13', '15:23', '16:28', '17:38', '18:58', '19:53', '21:08'],
        download: dziekonie,
    },
    {
        id: 5,
        name: 'Czechowizna PKP',
        Białystok: ['4:31', '5:16', '6:41', '7:36', '9:11', '10:11', '11:31', '12:26', '13:46', '14:41', '15:56', '17:11', '18:16', '19:31'],
        Mońki: ['6:06', '7:01', '8:21', '9:21', '10:56', '11:56', '13:11', '14:11', '15:21', '16:26', '17:36', '18:56', '19:51', '21:06'],
        download: czechPKP,
    },
    {
        id: 6,
        name: 'Czechowizna Skrz.',
        Białystok: ['4:33', '5:18', '6:43', '7:38', '9:13', '10:13', '11:33', '12:28', '13:48', '14:43', '15:58', '17:13', '18:18', '19:33'],
        Mońki: ['6:04', '6:59', '8:19', '9:19', '10:54', '11:54', '13:09', '14:09', '15:19', '16:24', '17:34', '18:54', '19:49', '21:04'],
        download: skrzyzowanie,
    },
    {
        id: 7,
        name: 'Czechowizna',
        Białystok: ['4:34', '5:19', '6:44', '7:39', '9:14', '10:14', '11:34', '12:29', '13:49', '14:44', '15:59', '17:14', '18:19', '19:34'],
        Mońki: ['6:03', '6:58', '8:18', '9:18', '10:53', '11:53', '13:08', '14:08', '15:18', '16:23', '17:33', '18:53', '19:48', '21:03'],
        download: czechowizna,
    },
    {
        id: 8,
        name: 'Knyszyn-Gon.',
        Białystok: ['4:38', '5:23', '6:48', '7:43', '9:18', '10:18', '11:38', '12:33', '13:53', '14:48', '16:03', '17:18', '18:23', '19:38'],
        Mońki: ['5:59', '6:54', '8:14', '9:14', '10:49', '11:49', '13:04', '14:04', '15:14', '16:19', '17:29', '18:49', '19:44', '20:59'],
        download: goniadzka,
    },
    {
        id: 9,
        name: 'Knyszyn-Rynek',
        Białystok: ['4:39', '5:24', '6:49', '7:44', '9:19', '10:19', '11:39', '12:34', '13:54', '14:49', '16:04', '17:19', '18:24', '19:39'],
        Mońki: ['5:58', '6:53', '8:13', '9:13', '10:48', '11:48', '13:03', '14:03', '15:13', '16:18', '17:28', '18:48', '19:43', '20:58'],
        download: rynek,
    },
    {
        id: 10,
        name: 'Knyszyn Kolonia',
        Białystok: ['4:43', '5:28', '6:53', '7:48', '9:23', '10:23', '11:43', '12:38', '13:58', '14:53', '16:08', '17:23', '18:28', '19:43'],
        Mońki: ['5:54', '6:49', '8:09', '9:09', '10:44', '11:44', '13:00', '14:00', '15:09', '16:14', '17:24', '18:44', '19:39', '20:54'],
        download: kolonia,
    },
    {
        id: 11,
        name: 'Chraboły',
        Białystok: ['4:45', '5:30', '6:55', '7:50', '9:25', '10:25', '11:45', '12:40', '14:00', '14:55', '16:10', '17:25', '18:30', '19:45'],
        Mońki: ['5:51', '6:46', '8:06', '9:06', '10:41', '11:41', '12:56', '13:56', '15:06', '16:11', '17:21', '18:41', '19:36', '20:51'],
        download: chraboly,
    },
    {
        id: 12,
        name: 'Myśliwiec',
        Białystok: ['4:47', '5:32', '6:57', '7:52', '9:27', '10:27', '11:47', '12:42', '14:02', '14:57', '16:12', '17:27', '18:32', '19:47'],
        Mońki: ['5:49', '6:44', '8:04', '9:04', '10:39', '11:39', '12:54', '13:54', '15:04', '16:09', '17:19', '18:39', '19:34', '20:49'],
        download: mysliwiec,
    },
    {
        id: 13,
        name: 'Kozińce',
        Białystok: ['4:49', '5:34', '6:59', '7:54', '9:29', '10:29', '11:49', '12:44', '14:04', '14:59', '16:14', '17:29', '18:34', '19:49'],
        Mońki: ['5:47', '6:42', '8:02', '9:02', '10:37', '11:37', '12:52', '13:52', '15:02', '16:07', '17:17', '18:37', '19:32', '20:47'],
        download: kozince,
    },
    {
        id: 14,
        name: 'Obrubniki',
        Białystok: ['4:51', '5:36', '7:01', '7:56', '9:31', '10:31', '11:51', '12:46', '14:06', '15:01', '16:16', '17:31', '18:36', '19:51'],
        Mońki: ['5:45', '6:40', '8:00', '9:00', '10:35', '11:35', '12:50', '13:50', '15:00', '16:05', '17:15', '18:35', '19:30', '20:45'],
        download: obrubniki,
    },
    {
        id: 15,
        name: 'Krynice',
        Białystok: ['4:53', '5:38', '7:03', '7:58', '9:33', '10:33', '11:53', '12:48', '14:08', '15:03', '16:18', '17:33', '18:38', '19:53'],
        Mońki: ['5:43', '6:38', '7:58', '8:58', '10:33', '11:33', '12:48', '13:48', '14:58', '16:03', '17:13', '18:33', '19:28', '20:43'],
        download: krynice,
    },
    {
        id: 16,
        name: 'Gniła',
        Białystok: ['4:54', '5:39', '7:04', '7:59', '9:34', '10:34', '11:54', '12:49', '14:09', '15:04', '16:19', '17:34', '18:39', '19:54'],
        Mońki: ['5:42', '6:37', '7:57', '8:57', '10:32', '11:32', '12:47', '13:47', '14:57', '16:02', '17:12', '18:32', '19:27', '20:42'],
        download: gnila,
    },
    {
        id: 17,
        name: 'Dobrzyniewo D.',
        Białystok: ['4:56', '5:41', '7:06', '8:01', '9:36', '10:36', '11:56', '12:51', '14:11', '15:06', '16:21', '17:36', '18:41', '19:56'],
        Mońki: ['5:40', '6:35', '7:55', '8:55', '10:30', '11:30', '12:45', '13:45', '14:55', '16:00', '17:10', '18:30', '19:25', '20:40'],
        download: dobrzyniewo,
    },
    {
        id: 18,
        name: 'Dzikie',
        Białystok: ['4:59', '5:44', '7:09', '8:04', '9:39', '10:39', '11:59', '12:54', '14:14', '15:09', '16:24', '17:39', '18:44', '19:59'],
        Mońki: ['5:37', '6:32', '7:52', '8:52', '10:27', '11:27', '12:42', '13:42', '14:52', '15:57', '17:07', '18:27', '19:22', '20:37'],
        download: dzikie,
    },
    {
        id: 19,
        name: 'Fasty',
        Białystok: ['5:01', '5:46', '7:11', '8:06', '9:41', '10:41', '12:01', '12:56', '14:16', '15:11', '16:26', '17:41', '18:46', '20:01'],
        Mońki: ['5:35', '6:30', '7:50', '8:50', '10:25', '11:25', '12:40', '13:40', '14:50', '15:55', '17:05', '18:25', '19:20', '20:35'],
        download: fasty,
    },
    {
        id: 20,
        name: 'Fasty Kombinat',
        Mońki: ['5:33', '6:28', '7:48', '8:48', '10:23', '11:23', '12:38', '13:38', '14:48', '15:53', '17:03', '18:23', '19:18', '20:33'],
        download: kombinat,
    },
    {
        id: 21,
        name: 'Białystok–Cast.',
        Białystok: ['5:05', '5:50', '7:15', '8:10', '9:45', '10:45', '12:05', '13:00', '14:20', '15:15', '16:30', '17:45', '18:50', '20:05'],
        Mońki: ['5:31', '6:26', '7:46', '8:46', '10:21', '11:21', '12:36', '13:36', '14:46', '15:51', '17:01', '18:21', '19:16', '20:31'],
        download: castorama,
    },
    {
        id: 22,
        name: 'Bacieczki',
        Białystok: ['5:07', '5:52', '7:17', '8:12', '9:47', '10:47', '12:07', '13:02', '14:22', '15:17', '16:32', '17:47', '18:52', '20:07'],
        Mońki: ['5:30', '6:25', '7:45', '8:45', '10:20', '11:20', '12:35', '13:35', '14:45', '15:50', '17:00', '18:20', '19:15', '20:30'],
        download: bacieczki,
    },
    {
        id: 23,
        name: 'Białystok-J.Pawła',
        Białystok: ['5:10', '5:55', '7:20', '8:15', '9:50', '10:50', '12:10', '13:05', '14:25', '15:20', '16:35', '17:50', '18:55', '20:10'],
        Mońki: ['5:27', '6:22', '7:42', '8:42', '10:17', '11:17', '12:32', '13:32', '14:42', '15:47', '16:57', '18:17', '19:12', '20:27'],
        download: jp2,
    },
    {
        id: 24,
        name: 'Białystok PKP',
        Białystok: ['5:13', '5:58', '7:23', '8:18', '9:53', '10:53', '12:13', '13:08', '14:28', '15:23', '16:38', '17:53', '18:58', '20:13'],
        download: dworzecpkp,
    },
    {
        id: 25,
        name: 'Białystok PKS',
        Białystok: ['5:16', '6:01', '7:26', '8:21', '9:56', '10:56', '12:16', '13:11', '14:31', '15:26', '16:41', '17:56', '19:01', '20:16'],
        Mońki: ['5:20', '6:15', '7:35', '8:35', '10:10', '11:10', '12:25', '13:25', '14:35', '15:40', '16:50', '18:10', '19:05', '20:20'],
        download: dworzecpks,
    }
];
