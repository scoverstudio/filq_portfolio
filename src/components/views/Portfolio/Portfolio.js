import { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import Spinner from "react-bootstrap/Spinner";
import clsx from "clsx";
import fetchVideosFromPlaylist from "../../../functions/fetchVideosFromPlaylist";
import fetchVideosFromPortfolio from "../../../functions/fetchVideosFromPortfolio";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./Portfolio.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import { useTranslation } from "react-i18next";

const Portfolio = ({
  playlistOneIds,
  playlistTwoIds,
  playlistThreeIds,
  playlistFourIds,
  playlistPortfolioIds,
  isLoading,
}) => {
  const [videos, setVideos] = useState(null);
  const [title, setTitle] = useState("all videos");
  const [sortBy, setSortBy] = useState("sorted by recent");
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [t, i18n] = useTranslation("global");

  const [showVideoEditing, setShowVideoEditing] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showVideoGraphic, setShowVideoGraphic] = useState(false);

  useEffect(() => {
    fetchVideosFromPlaylist(
      playlistOneIds,
      playlistTwoIds,
      playlistThreeIds,
      playlistFourIds,
      setVideos
    );
  }, [
    playlistOneIds,
    playlistPortfolioIds,
    playlistThreeIds,
    playlistTwoIds,
    playlistFourIds,
  ]);

  const sortByViews = (videos) => {
    setSortBy("most viewed");
    const sortByViewsArr = [...videos];
    sortByViewsArr.sort((a, b) => {
      return b.statistics.viewCount - a.statistics.viewCount;
    });
    setVideos(sortByViewsArr);
    setSortBy("sorted by most viewed");
  };

  const sortByRecent = (videos) => {
    setSortBy("recent");
    const sortByLikesArr = [...videos];
    sortByLikesArr.sort((a, b) => {
      return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
    });
    setVideos(sortByLikesArr);
    setSortBy("sorted by recent");
  };

  const showAllVideos = () => {
    fetchVideosFromPlaylist(
      playlistOneIds,
      playlistTwoIds,
      playlistThreeIds,
      playlistFourIds,
      setVideos
    );
    setTitle("all videos");
  };

  const showPortfolio = async () => {
    fetchVideosFromPortfolio(playlistPortfolioIds, setVideos);
    setTitle("porftolio");
  };

  useEffect(() => {
    window.onscroll = function () {
      var myDiv = document.querySelector(".moviesPanel");
      var currWidth = myDiv.clientHeight;
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight + 100
      ) {
        if (currWidth < myDiv.scrollHeight) {
          increaseDiv();
          setAllLoaded(false);
        } else if (
          myDiv.scrollHeight > 1500 &&
          currWidth === myDiv.scrollHeight
        ) {
          setAllLoaded(true);
        }
      }
      if (window.innerHeight + window.scrollY >= 1500) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };
  }, []);

  const increaseDiv = () => {
    var myDiv = document.querySelector(".moviesPanel");
    var currWidth = myDiv.clientHeight;
    myDiv.style.height = currWidth + 800 + "px";
  };

  const resetDiv = () => {
    var myDiv = document.querySelector(".moviesPanel");
    var currWidth = myDiv.clientHeight;
    myDiv.style.height = 800 + "px";
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToPanels = () => {
    setShowVideoGraphic(false);
    setShowVideoEditing(false);
    setShowPhotos(false);
  };
  const [index, setIndex] = useState(-1);

  const images = [
    {
      src: `https://lh3.googleusercontent.com/CSGKdYg9l7Udn_mDVTB2dd4YK8ou6fxg28PkxdDkOllMXkLCv3riB3Z3HUinCJjxSeeIVTh7-h30CnmwtrK08U4zZo4WLq6fzCU9b5wIIIzW6Ooe7d4AtsDzNjS3NXEDGfkPfjvNqw=w2219-h3328`,
      width: 2219,
      height: 3328,
    },
    {
      src: `https://lh3.googleusercontent.com/aC-Rjbm2nfU59BxvuScyjHy8GemxbgDr0V7XbeHgW4nDvGOcAlwGoR85d9oxcMXZ_3bex3P5TEK8bjEJV6zwO08uD9RDfTHV9Kcw8XU7Waem7rIBn8UbQD_VLWqwP-81n1pm2-OlHg=w7008-h4672`,
      width: 7008,
      height: 4672,
    },
    {
      src: `https://lh3.googleusercontent.com/vtMX6vs6eIUeGSxLxaPmPXqc4pBcjg7QVXcM6ZkVOAvM53SjaVvuJepukG_amwzPA3nEoWQ_KzUc_ss7bgSE5QhvEH2zNbtObCd5uvqKusux7w-06T2ABVHAfIsEOu93Brjb3HR6Hw=w7008-h4672`,
      width: 7008,
      height: 4672,
    },
    {
      src: "https://lh3.googleusercontent.com/UvWPd_wUM3JgPNJ2pW37GQxgQo4La7XZPEneznfUeCorQB9JSyOFKmtoLgbjw1SCjfpxXwdiWfk6CRA3_aSFM_8IXxE_FunSzOmUReomw5JvOaWqybA-__SM3b-k01ih_0BzHFqswA=w2400-h4672",
      width: 3072,
      height: 4672,
    },
    {
      src: "https://lh3.googleusercontent.com/YOuOMT4R84kKRxyqvjJwFFnicnNr9QsRowlMyqT7GNY5Hj86JuVuQDGG0KNY4wi1kU0fWCThN7TRs7_ZJ88etp545a_2poEVJjb3T7CKSD2AZj8LUsPA7ZJs2w2c08RSW6XfOOS40w=w2400",
      width: 3072,
      height: 4608,
    },
    {
      src: "https://lh3.googleusercontent.com/THYKTILxW49kb1_dj5OKFjDcpDD1RZ2qyMRn-1ez_hf5KPHW59V9Q3ldWLeSN42cWvJlEW1ArdNA-o7JVAERmsiGIN2h4wtgiG1d7f4VTbO7mJeqQGBKl7RhKYn5l8qcv6XMxBcaEg=w2400",
      width: 6427,
      height: 4285,
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-njGV2FeRZYms2y7lT7MFSfr0Uk33nbFebcJ4-R5raY1xg6K9pGVLQiRMRxNTJ1f8Xm8zJeA9bicFVPfpWxKQpcFe-vZigTNL04lkJszEYfZ1Tip8=w2400",
      width: 3736,
      height: 2490,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_6rM6GLXARFggrd6TNcJC8nQxSy1nAPymhP9xBX2yxXxpreibTifVQeLxTkG355RXHve29RElszxgyKaIoYXdzzAwzzuyIwgwN-oG6QxKRK2J8kAU=w2400",
      width: 4608,
      height: 3072,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-2gXNoUZcYmuP7tQ_vZMTdqD4_SIs-EQv9SnPW-dD6eR_xLF9QIIbrBe8TbjYRszR9QqcEPWnztpNLOMBQ-xrh7pNkmRGTPwyxFVfVaV9rw3XH90M=w2400",
      width: 4131,
      height: 6196,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc949jm-_1d7TbY3B6hU0697K7ZGeIELQc3P1nG57aP8a3gWUM-6JlfC27Ygci7RVP3E4GVuF6EjzcWibeqTCcNfp0Drn18z2WzBHcHHnl8OfDPlsS4=w2400",
      width: 2219,
      height: 3328,
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9sbXe03e4Yg4VtCyVCO_hdNqZujLt3uLsolFXz_wO8MSzFR80dLQSaux3azn64wU84KCL3Vg8cSRc_yVkMvgfO71M6flr3-sSb2HpBFUg-ewZ-lSY=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-v2uwdzjVD-3zBfjJwx1saiy9zsu5yqiYdcHZLoPjPsKyqFatejIXfNN_FpRrxXbCWpSgDaVRaXVtfnQLCZ3AXCjyavBeq3SmVMXGkkGTH4z5AEiw=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-KVWY7c3FxieXCDeuNaOSRK9uEUWyeiAz9whaP-WiJyqbnnc3LxanBSfcsJxY85ouINmJMCNIjp8sY1U8PYW3Xi4-DfLHR9EuOsvqXmiCLs6PkkJo=w2400",
      width: 3072,
      height: 4608,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-Z1L58HgnDG1lS3YGJm8M5UqPEjl-lpN3Axu5ObtA-5Xw5voU82sxfGPAZ2rAkSAXNWZyv7cgU1gmICmVJ3Abrncj83axqia-QwZTSiYPiz-OufOs=w2400",
      width: 3072,
      height: 4608,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8gdWh5JUWnR_9Gwl0aB0li8d82ugLNYxwxyeRRFkxjLyEMPQtt22-GDeBvJj8DEsFr69bRL4eotQ5dvE41ETet67OzTB5N2vTH2TmqP9bz0LBJQ88=w2400",
      width: 6427,
      height: 4285,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9ilFj4vNbdUXl2q5puDFq1foU924GYb_WZ5J6uA4Oog6CRwkBgO6vTlw8m35OFWJXv-gcYLMMp-w0KkgosPTqeu8meQsP7uAwpzHIk5LSRYgKmuVI=w2400",
      width: 6594,
      height: 4396,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8-UrIPtUXUQYMcHamd5y60pSlk7l9IlNNenfMO_kjhQH9-vD1nTK_l9gYvoD1AxN0R7qStmt9w400DhxUfMp9EVqKeXHpKHSkWsn0c9qo50xjeXNg=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9nAFG1y2Obx6q-Dg4EGYzSCo9zGokAawMYZDssF8FhAYrq7960jeyRiG9tj5lBSRAibybJKZWK0j_ivB4JoZ-RAy7KiHdXMVOFKUKa5O_KvJXi4ts=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8Q7y81grGnRtAjmwYDlvoR8CsnvvCrrDIJhPL8foJHpuAlReVjf4GNzV9-BPDCX97a7WxnURBQPCvhY99BoGAvIFayV-g3ckF5lBqaD5ptl1DMKe8=w2400",
      width: 4487,
      height: 6730,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8l37PC0zwxU26lAJKRbqTyEDojsbM_p_zpqnCIxHtoQCwIaWUb3RDVZwzRneGrAMcfk2_96wdl4B5sXogM15144YWHjcc7oivWYCnt4amGO0bNgpY=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_wIWe2K1ybAXxWtGDUORvob6_3EL3i1sEp3-ETUDdZIP6qOKocPL-oekuh9Kc9s13C0evAc63dlaskSYIeLLDCchKsdxTPIHC2leuyRptUvK-CL2M=w2400",
      width: 5326,
      height: 3551,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9MqTuc_ow3-BsDn_N13dRL63NLTIBMCfQXYwHalWneyQH8GkhK-EkLvnfqTnZT6KkS4X4nzM5A9gwJ4vAkDWlBM2uEMy0gpXkIctevtHqEga16WRg=w2400",
      width: 4608,
      height: 3072,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8PIW0wqC6MiXDM2tk2GC0qzoG3pZ0HS0WKxoHyOkCxoe3F3vTKdRN-UdY16iYML-mhGKCOTcjyxXunkxVZ5sDjwxA9nvfxdEgf9ZuKkzz02unuaeM=w2400",
      width: 4099,
      height: 6148,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9WrfkVR_4iffP9oQUsh3sB37dvAx_cQ-6Nz9VqXmXC810pL3KLsZM1bCOHuYqBOaakKpbp3No-KNQr7ul9VtbPdhw4V4uvBnsahPj2RvuHx4aa9sM=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_Hv79dw_YX_wWJk2VjxLQ7hcd9Cjf4O0JiD9BYQJdYbr3sLhOOcC1iv-V3ZearIbw-O9kpAbXJQhZd_7X2C97_75E7OnjNvZCFC1O4Ux45AxySAiQ=w2400",
      width: 4672,
      height: 7008,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_aLQVOfzIC3aIFXJJWH24gbyXp_Mvk0kyDuOfF924eNTbAN4Ow9KnlvjJkanRd-S9uXT_rBaQVVnDnxzmlwgLW1wn77KTa9tm-5hQtyf_27Hl7OH0=w2400",
      width: 6572,
      height: 4381,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9v4L5quvZWV4wy1BTMQXlw6TbNIdzsLI-JFMAbuwkJJTl4SpTcQuW6fZ-kns_Cf4Lyj0E_g8d6uOnCTUyLWGnjUVvDB-1ROy13VuzQPFrMhs34P6I=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9v4L5quvZWV4wy1BTMQXlw6TbNIdzsLI-JFMAbuwkJJTl4SpTcQuW6fZ-kns_Cf4Lyj0E_g8d6uOnCTUyLWGnjUVvDB-1ROy13VuzQPFrMhs34P6I=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8VbaoCJm45MLMdAsT-aOvAy6y6kuKICrhcGjr6rJ7CgzRImcNBjiTw0FTYxRMyMzG1jU_8erQfX7fdACgiqyhSq-OUYahOTsWfFhXOGngO3zfzk58=w2400",
      width: 4165,
      height: 2777,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-VUel_4MSgWbH1EnyFJnuCvJK_RXlr38wO35T74GD4A8GKqjIFC5EEVXM4Xr5nxt3bW37M0vZDwHJuIa4V165lzbG71b6NxceiM44kgm6rZTeARyk=w2400",
      width: 4243,
      height: 2829,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_J7QEpYaJ-vlnDFtRiEcOrkqkIR24kN9ERSdjz97OtHQ697Mn3jUvcIIPYfAkvydSDgB1KTZMl9nlctwZmqwcU1pA0ZiSCL1eQycyx-G9UfBXx2D8=w2400",
      width: 4608,
      height: 3072,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc97mD77U8hMBuSUW7gJbg1eBgugKk38tNPb60xZ-Uh1MctiF6kvl4Rurf7KlCzWKfghL2ZA3luxgMEf2DuzlHmzJJPYhZVzPLl4cJN0zHC7tkFCIqc=w2400",
      width: 4070,
      height: 2713,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc97mD77U8hMBuSUW7gJbg1eBgugKk38tNPb60xZ-Uh1MctiF6kvl4Rurf7KlCzWKfghL2ZA3luxgMEf2DuzlHmzJJPYhZVzPLl4cJN0zHC7tkFCIqc=w2400",
      width: 4070,
      height: 2713,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-oQyjNldr4WwNXYPjks6jAP4PBKPkZafs1HlEPv-5C1qsRs3Io4Mt6rRhhD_zn4Z2RdrSrMLyUW4Dn-GRpgTTONmpRiUmPYKuKYLf6TtyYLZxEDxk=w2400",
      width: 6770,
      height: 4513,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-oQyjNldr4WwNXYPjks6jAP4PBKPkZafs1HlEPv-5C1qsRs3Io4Mt6rRhhD_zn4Z2RdrSrMLyUW4Dn-GRpgTTONmpRiUmPYKuKYLf6TtyYLZxEDxk=w2400",
      width: 6770,
      height: 4513,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8_DBOTWr3bnwM00fN9bCP8vzQBD5Mf3-rwqr66pJ0h6prcaSl228aaj9_Tvzut8c9iEXcPzvwfWtD7PbTuMYXmL5pPnuLMF3ROjFjt7XPga4ipFOU=w2400",
      width: 6559,
      height: 4373,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9P1hkFcM3sCyKcBuVx2bOVMsq6a6wBm6RTCmlI95Iwnn9lT02BcEAu_Oq_cCbZfBWQbyhEgWGJJxuUORIUexST7Y9g54sPZB6iJaJ4YwSlqSIMxPw=w2400",
      width: 6814,
      height: 4543,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc82UY6blJKM2_7MhLQCrFdGCG7hIVQGcfaOlzMcRPrO7_Wwe7OIevtiqde_HvLWqvYBFMvlpZmDbrr-VXOcQkDX7McMLPQJPEjYEWP4_YYwF7c3iHA=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc82UY6blJKM2_7MhLQCrFdGCG7hIVQGcfaOlzMcRPrO7_Wwe7OIevtiqde_HvLWqvYBFMvlpZmDbrr-VXOcQkDX7McMLPQJPEjYEWP4_YYwF7c3iHA=w2400",
      width: 6422,
      height: 4281,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc98bIIdgIk0x4F3bhqfw9i4IRmSeWTcs8Rx6E_axiu-EEvemBWO63y_PfpeFz5DkXLULI3d3qRt2zazPpccG3pGBvnTyx35PsNhEzrk21vt6XaYSMA=w2400",
      width: 6455,
      height: 4303,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc98bIIdgIk0x4F3bhqfw9i4IRmSeWTcs8Rx6E_axiu-EEvemBWO63y_PfpeFz5DkXLULI3d3qRt2zazPpccG3pGBvnTyx35PsNhEzrk21vt6XaYSMA=w2400",
      width: 6455,
      height: 4303,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9_URBxDdYqtBlkMAxpwQJaC-4EhKkVzw4isEHkUqNcxP8Muf1IZZMIaPi8dVRTT2YUsKNFnG3sK088-I-fy8qSaz45T20o0baA5GMkyCk4UpJGW5c=w2400",
      width: 4586,
      height: 3057,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9_URBxDdYqtBlkMAxpwQJaC-4EhKkVzw4isEHkUqNcxP8Muf1IZZMIaPi8dVRTT2YUsKNFnG3sK088-I-fy8qSaz45T20o0baA5GMkyCk4UpJGW5c=w2400",
      width: 4586,
      height: 3057,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9jPyFlzirv5ZcmXWUt1dA5vxFDsiILnypPN8YT70ItR3JtV_HdXhw8t0HvKNRGutJJb4KH7zJjrnPFOouDdK5CEJjhb87dapOgWQY2mPpY1AHwSMM=w2400",
      width: 6328,
      height: 4219,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8NH-IGp1F6jCBbzHOUkQGDPBrgymMhKyj9peXXQXN6wbJwEtUQLj8Wyds0V6ZWoXX4K10U-0ubfgTrxs7QV9Z8NwaBhYsfsVjHuPQB54hANhpRESQ=w2400",
      width: 6527,
      height: 4351,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8NH-IGp1F6jCBbzHOUkQGDPBrgymMhKyj9peXXQXN6wbJwEtUQLj8Wyds0V6ZWoXX4K10U-0ubfgTrxs7QV9Z8NwaBhYsfsVjHuPQB54hANhpRESQ=w2400",
      width: 6527,
      height: 4351,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-Cy-HEUtQQX-qOiP7M2ZBdkeuAWczaUnVY_u4ClHMQvo2vK3ld6X7Hi4AX5zhIVlZMMXyapIesDJWyNH5Q-PbXlc8bwUz5bwPwuEIebvZNCcxWWEo=w2400",
      width: 6160,
      height: 4107,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-Cy-HEUtQQX-qOiP7M2ZBdkeuAWczaUnVY_u4ClHMQvo2vK3ld6X7Hi4AX5zhIVlZMMXyapIesDJWyNH5Q-PbXlc8bwUz5bwPwuEIebvZNCcxWWEo=w2400",
      width: 6160,
      height: 4107,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-fS1dJNT2fvQcAl8Twd4xhXdDRJVJFh_Zcy15oW29owVJcheXjAcSSRjqe8FkAUEyp-z7NJQyjI-dplvbavHiVvBq3CT5e-6ukczdc8JWTHNBLRss=w2400",
      width: 6573,
      height: 4382,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_XNmno4LcD1xZOz3OYpRwk7YjT4xnmf0OYud2W168OZ3eJvRi-Hg-w0vboGY5WzF0wJeYHD8PNbcTv7fmFYaERZMe_cMmp-NqSvR7dC0ZG_dHOBp8=w2400",
      width: 5856,
      height: 3904,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-8m7_sIvVeKxBsx1qJZ6HwIOAoREApqI7TSAW5AxcMWR3nqlRoZgamhhJ96aEf_9uCVfhO1I4uGJ8Hqbejmuvgo7cH9fnWj0ibvfZ9SdlOkp0aj5o=w2400",
      width: 5744,
      height: 3829,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9Z5VBxWSDVgwbuqYQpJIre2tuQJ_nqke2kSEL417qq_8_7QPMIJDZsM5oBmktivuTOCxkWdMkM4fzWSL_cAB_xC7E6l7ys7OPq0008r_PVriGIrII=w2400",
      width: 6672,
      height: 4448,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9DwdP4eir8Foo6gojvV5y6fwRlyaFgVFIi4i52zby9FFRpukkCQX3cMvkAM3cUSl-Ey3JvZSboU11Gyf-l9plQo1JmRDzDfow2TNJGLVZhsjoumao=w2400",
      width: 7008,
      height: 4672,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8POcEbyrShoVXWLe0TZNBB50FsZyG04VpjxvoVVJxv3TofSRua1E9LKwYv3uviMe8UJc-Dpjrgx7_D0HTmM88b7nfa895XNFJcQtSPh2kzoV92HUA=w2400",
      width: 6541,
      height: 4361,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc86C2sPExQ6qdAgqZiti7i2QXFAUkBU3gPFLYfudo60EHhCWZc6IR-h8a20hNUyGryN76IYOADnsaXpRbv5rEDGu41AasjwIxnIQxjlfvHGoEXUo40=w2400",
      width: 5882,
      height: 3921,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_cvf-rvfqqCriCnb2lpumsenrCDPJgglzA46QV8Dvceb8usk4oBKyOHUo3OIzhI6xX5Hj7EpHFuasSbWnnYPzm4U3Tm0A51lThK1xFIeaT_oy3aO4=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9bTsqS5lo3u-Vbcojium9V3jn5UVxKFp5AAUVN6KMhF_-HDdMfndAsdHNvjjfP6a5JU6Dzo5vGtEQOdwxzPuBW_-lJhgfFQHQaBDrPk64jbscECYA=w2400",
      width: 4000,
      height: 6000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9xiNtjD41LHeaf1SJ6uBgN9tkoab5AfRWiOZDhWAxyydUT6Ybi3CLZnSskvjJksBOQwCqdfZ0j9A-99f_2dV2OjMbBsoTqKuhvylMBcH8qiK4DBgQ=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9xiNtjD41LHeaf1SJ6uBgN9tkoab5AfRWiOZDhWAxyydUT6Ybi3CLZnSskvjJksBOQwCqdfZ0j9A-99f_2dV2OjMbBsoTqKuhvylMBcH8qiK4DBgQ=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-OsYiYID3YvwZxCwR3w5V8s1xsx2no4dxzMHIywumSvmwehh8tJtYLDrUKzqOtZ0A8poXbd39s9JCi6VIQACfMMADqkCqa2ZnFFle7vQtA44Ic_8w=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-OsYiYID3YvwZxCwR3w5V8s1xsx2no4dxzMHIywumSvmwehh8tJtYLDrUKzqOtZ0A8poXbd39s9JCi6VIQACfMMADqkCqa2ZnFFle7vQtA44Ic_8w=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8X0-RbuL0_jpIHtoWLNpNJtXvG_RpDVIP4VFdw7g8GpdKOuI51xNJULZcmgLXQqKC0_tigQwxFbz66QHUhgboDBwldp9rutuFPzAMdU3-BYskT7Eg=w2400",
      width: 5726,
      height: 3817,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_82Axgahm448pguqfub4s26oJ2LTXHwpwcDPi6psz8KKMBXgCIKY_TaTq6napkqo-DFIT5rEU8pHgpubijUkut3zz-vz5Fmni6LEyZ6jLm3LHaEtw=w2400",
      width: 5683,
      height: 3789,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-2Yr7S6aFgBv_fp-0ow6NDbORVVE7GW-8TXJJoGATuM_7IZHQilEm8zq64H6BsbP7nKIjLW0TTKwuPNpUPiCzxtOizl1zFXStO8l1DS4TlvriqrTg=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-Kfxgic8qHd894WEBWdvD2caVU1c9Y5FcPYemp3adkAer_QdrkDratbEkviS1Xfp1vG3C8TDpEMUH67wflB4qGjmZ4-VGfeCzG8R28Wvy6prrlAsw=w2400",
      width: 5577,
      height: 3718,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8e3oHWFraFKZLXwknYf_Cpbp_oMFBeIFB-hMLIpgx4nEaYIyaYSdAV6L9zQPjNirDG6_4XTe0nZPgwIRy4-aXOZ0yzfE-U0tIw7AEw2x9Z0P19pOM=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9D3XFTUDfDVmSfI5_KwxOwtkF1MWiNyzOzrRlRv_dvGZL1aM9eq3fpt-80ZuYE2ts4s0dgBrZcucMyD7zeiD0k2QWLPq2xgwFv6OsV-yGi4jZb0Zk=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9bfKxAxyaoye-RsqW31N-Pykx4oHOjaF4I1YCAvOFeDIblETY0I8Z5iiy9NyaCxYCXqxvGLp65tYVqyrQc1kptg1Ydeo9II0xT5mKCrI488sOzMcU=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8N4cecmB7t-ZdUyymjEfFJ3Aarj7SvcB0Z7n27FZjymQxx3oSwBD8sc_mI0WAflxQm0hYzGgs9w0u8QC91dVlnZSMbO-JwEz52uyaZAGZZAQYwFdo=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9oCbTxnfFRqDQCL-i0iTruT__WFTUTBOF8oGv4QYmiupY2uP1RxdcVQlkNq_NMNYgjGXPpaUF_LsJbxzenj0imZG78UdyRqGc1JirZayj5L6LRQbw=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc8wtX3Hx31dSm_SC7bgNidI78_p5QkrLm7AvHpZRk0DhlGLnfXqr2Bi3eWimKbQq74fme6d3Y-13-MdhqYBAYyW9nALaoLVYdidB0vpZWV4_JwA7Zo=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc80cKzQ4KMEi_jElsfLteoPvv3nUUyNS9zwKOmd_CB82dMKT044ejsb-oNGw70AOOWZPoV8n1J-PrIPi3zh3GU6iZ2rgBGGRJjJKB5zBWFY3z38-Gg=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-8ePtXAwIURfz1N1Xkyx3k-HWBHT7l5dt4SfwH-XD9CCPsmI7naNF_S60ReYbLdTStGQSXwnUwSeEHRJ2KbNJzjw_B0NxcKLc961Wj7CRDOz5-wUE=w2400",
      width: 3072,
      height: 4608,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_Vl32ZMq46Mk1OCISHS2eTEYb6-FO_lkQeNfzb91YqA7JVXTvSGzfzWGe8JHNwpu1sFJ61BUTCaHyN13os2iv-SLmg_8n5XBFR-ZNXuwt_Pf_zpIs=w2400",
      width: 5659,
      height: 3773,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc9qPElP1XXjgPFq_Ts6i3kzHOnW_JPJ_pKHxNcnBxDgXZUc-Z9J-kaE1U3xuL0Q4JGydSt7IcLhBRg7JZdVBIuQZY7LRAlj9l7xw2B4uxkO0rlWwME=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-gL8Reup9Bb5GDATPWSgaD3_pBLWdTy7pdDg8Vgx5e9HsQZzkkqA1P-nsUB1txmnWZy_mzVck2aYbv-SkfmFTj9ScNrYLmJnjB2ky5LGay0zp6oDc=w2400",
      width: 5835,
      height: 3890,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc__0NX3-2s8iq0Qu4yIOnuqSKUphJ8zW61vjoi8WomLHuS4eFOelcsKrEg1o_8OQGmElQwDZXo_4YHAv-jzYZpOqvXjYen7n-xCfNxECUXVLOR76iQ=w2400",
      width: 6000,
      height: 4000,
    },

    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc_hULd939KTpGFZ45B8jvNAE_6mEGpJovq09WY_Y2HLCmA9NYsemYYVwck3zNBuYCGTTk31xqMY583b9l1GVR-Cke5FfbBcr09g7l_K8Gq910HkuVM=w2400",
      width: 6212,
      height: 4141,
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-T7ymskQHhV8xtn5a-DLBxDKBo9Hdg1M-nAQxRZqfdo7Rg2vbMT3gG9Mqoi1ICBZcYaltza_bSD50HBSjyi_4HNo0Kv3gSWzQR9AitHIifYcOwWQM=w2400",
      width: 7008,
      height: 4672,
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AIL4fc-HIvqli4_pzovvDpKL7M1TpVCFF_A3yFVhH9Ql32Rk-A9OGCSqHeYmPhLpB-XLVadMP696DFfoHEzdx0HEriZlDa5TtAsyJ0bNzxf25UQQcXe8Yos=w2400",
      width: 5647,
      height: 3765,
    },
  ];

  return (
    <>
      <div
        className={clsx(
          styles.portfolioContainer,
          (showVideoEditing || showPhotos || showVideoGraphic) && styles.active
        )}
      >
        {!showVideoEditing && !showPhotos && !showVideoGraphic && (
          <div className={styles.panels}>
            <div onClick={() => setShowVideoEditing(true)}>video editing</div>
            <div onClick={() => setShowPhotos(true)}>photos</div>
          </div>
        )}
        {showPhotos && (
          <div className={styles.photosContainer}>
            <div className={styles.titleContainer}>
              <h1 className={styles.photosTitle}>
                <i
                  onClick={() => backToPanels()}
                  className="fa fa-arrow-left"
                  aria-hidden="true"
                />
                Photos
              </h1>
            </div>
            <Lightbox
              open={index >= 0}
              close={() => {
                setIndex(-1);
              }}
              slides={images}
              index={index}
            />
            <PhotoAlbum
              layout="rows"
              photos={images}
              onClick={({ index }) => {
                setIndex(index);
              }}
              targetRowHeight={150}
              rowConstraints={{ maxPhotos: 5 }}
            />
          </div>
        )}
        {showVideoGraphic && (
          <div className={styles.videoGraphicContainer}>
            <div className={styles.titleContainer}>
              <h1>Video Graphic</h1>
              <span onClick={() => backToPanels()}>{"<--"}</span>
            </div>
          </div>
        )}
        {showVideoEditing && (
          <div className={styles.videoContainer}>
            {/*<div*/}
            {/*    onClick={() => scrollUp()}*/}
            {/*    className={clsx(styles.scrollUp, showScrollUp && styles.display)}*/}
            {/*>*/}
            {/*    <i className="fa fa-arrow-up" aria-hidden="true"/>*/}
            {/*</div>*/}
            <div className={styles.titleContainer}>
              {title === "all videos" ? (
                <h1>{t("portfolio.all-videos")}</h1>
              ) : (
                <h1>{t("portfolio.portfolio-message")}</h1>
              )}
              {sortBy === "recent" ? (
                <h2>
                  {t("portfolio.sorted-by")} {t("portfolio.recent")}
                </h2>
              ) : (
                <h2>
                  {t("portfolio.sorted-by")} {t("portfolio.most-viewed")}
                </h2>
              )}
            </div>
            <div className={styles.control}>
              <p>{t("portfolio.filter-by")}:</p>
              <ToggleButtonGroup
                className={styles.filterGroup}
                type="radio"
                name="filters"
                defaultValue={1}
              >
                <ToggleButton
                  className={styles.button}
                  id="option1"
                  value={1}
                  variant="danger"
                  onClick={() => {
                    showAllVideos();
                    resetDiv();
                  }}
                >
                  {t("portfolio.all-videos")}
                </ToggleButton>
                <ToggleButton
                  className={styles.button}
                  id="option2"
                  value={2}
                  variant="danger"
                  onClick={() => {
                    showPortfolio();
                    resetDiv();
                  }}
                >
                  {t("portfolio.portfolio-message")}
                </ToggleButton>
              </ToggleButtonGroup>

              <p>{t("portfolio.sort-by")}:</p>
              <ToggleButtonGroup
                className={styles.filterGroup}
                type="radio"
                name="sorts"
                defaultValue={1}
              >
                <ToggleButton
                  className={styles.button}
                  value={1}
                  id="sort1"
                  variant="danger"
                  onClick={() => {
                    sortByRecent(videos);
                    resetDiv();
                  }}
                >
                  {t("portfolio.recent")}
                </ToggleButton>
                <ToggleButton
                  className={styles.button}
                  value={2}
                  id="sort2"
                  variant="danger"
                  onClick={() => {
                    sortByViews(videos);
                    resetDiv();
                  }}
                >
                  {t("portfolio.most-views")}
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className={clsx("moviesPanel", styles.moviesPanel)}>
              {isLoading ? (
                <Spinner className="m-auto" animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                videos &&
                videos.map((movie) => (
                  <div key={movie.id} className={styles.movieBox}>
                    <div className={styles.movieImage}>
                      <a href={`https://www.youtube.com/watch?v=${movie.id}`}>
                        <img
                          alt="movie"
                          src={`${movie.snippet.thumbnails.medium.url}`}
                        />
                      </a>
                    </div>
                    <div className={styles.movieContent}>
                      <a href={`https://www.youtube.com/watch?v=${movie.id}`}>
                        <h3>{movie.snippet.title}</h3>
                      </a>
                      <span>
                        {t("portfolio.views")}: {movie.statistics.viewCount}
                      </span>
                      <span>
                        <i className="fa fa-thumbs-up" aria-hidden="true" />
                        {movie.statistics.likeCount}
                      </span>
                    </div>
                  </div>
                ))
              )}
              <div
                onClick={() => increaseDiv()}
                className={clsx(styles.revealMore, allLoaded && styles.display)}
              >
                <i className="fa fa-arrow-down" aria-hidden="true" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
