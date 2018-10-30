--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5 (Ubuntu 10.5-0ubuntu0.18.04)
-- Dumped by pg_dump version 10.5 (Ubuntu 10.5-0ubuntu0.18.04)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Comments; Type: TABLE; Schema: public; Owner: kubitre
--

CREATE TABLE public."Comments" (
    id bigint NOT NULL,
    "idOwner" bigint NOT NULL,
    "idPhoto" bigint NOT NULL,
    body text,
    likes integer NOT NULL,
    "replyId" bigint NOT NULL,
    "timeCreated" bigint NOT NULL
);


ALTER TABLE public."Comments" OWNER TO kubitre;

--
-- Name: Comments_id_seq; Type: SEQUENCE; Schema: public; Owner: kubitre
--

CREATE SEQUENCE public."Comments_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Comments_id_seq" OWNER TO kubitre;

--
-- Name: Comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kubitre
--

ALTER SEQUENCE public."Comments_id_seq" OWNED BY public."Comments".id;


--
-- Name: Followings; Type: TABLE; Schema: public; Owner: kubitre
--

CREATE TABLE public."Followings" (
    id bigint NOT NULL,
    "idWhoFollow" bigint NOT NULL,
    "idWhichFollow" bigint NOT NULL
);


ALTER TABLE public."Followings" OWNER TO kubitre;

--
-- Name: Followings_id_seq; Type: SEQUENCE; Schema: public; Owner: kubitre
--

CREATE SEQUENCE public."Followings_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Followings_id_seq" OWNER TO kubitre;

--
-- Name: Followings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kubitre
--

ALTER SEQUENCE public."Followings_id_seq" OWNED BY public."Followings".id;


--
-- Name: Likes; Type: TABLE; Schema: public; Owner: kubitre
--

CREATE TABLE public."Likes" (
    id bigint NOT NULL,
    "idOwner" bigint NOT NULL,
    "idPhoto" bigint NOT NULL,
    "timeCreated" bigint NOT NULL
);


ALTER TABLE public."Likes" OWNER TO kubitre;

--
-- Name: Likes_id_seq; Type: SEQUENCE; Schema: public; Owner: kubitre
--

CREATE SEQUENCE public."Likes_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Likes_id_seq" OWNER TO kubitre;

--
-- Name: Likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kubitre
--

ALTER SEQUENCE public."Likes_id_seq" OWNED BY public."Likes".id;


--
-- Name: Photos; Type: TABLE; Schema: public; Owner: kubitre
--

CREATE TABLE public."Photos" (
    id bigint NOT NULL,
    "idOwner" bigint NOT NULL,
    path text,
    body text,
    alt text,
    likes integer NOT NULL,
    "timeCreated" bigint NOT NULL
);


ALTER TABLE public."Photos" OWNER TO kubitre;

--
-- Name: Photos_id_seq; Type: SEQUENCE; Schema: public; Owner: kubitre
--

CREATE SEQUENCE public."Photos_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Photos_id_seq" OWNER TO kubitre;

--
-- Name: Photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kubitre
--

ALTER SEQUENCE public."Photos_id_seq" OWNED BY public."Photos".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: kubitre
--

CREATE TABLE public."Users" (
    id bigint NOT NULL,
    username text,
    "userImage" text,
    email text,
    password text,
    "timeCreated" bigint NOT NULL
);


ALTER TABLE public."Users" OWNER TO kubitre;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: kubitre
--

CREATE SEQUENCE public."Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO kubitre;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kubitre
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: __EFMigrationsHistory; Type: TABLE; Schema: public; Owner: kubitre
--

CREATE TABLE public."__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);


ALTER TABLE public."__EFMigrationsHistory" OWNER TO kubitre;

--
-- Name: Comments id; Type: DEFAULT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Comments" ALTER COLUMN id SET DEFAULT nextval('public."Comments_id_seq"'::regclass);


--
-- Name: Followings id; Type: DEFAULT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Followings" ALTER COLUMN id SET DEFAULT nextval('public."Followings_id_seq"'::regclass);


--
-- Name: Likes id; Type: DEFAULT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Likes" ALTER COLUMN id SET DEFAULT nextval('public."Likes_id_seq"'::regclass);


--
-- Name: Photos id; Type: DEFAULT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Photos" ALTER COLUMN id SET DEFAULT nextval('public."Photos_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: Comments; Type: TABLE DATA; Schema: public; Owner: kubitre
--

COPY public."Comments" (id, "idOwner", "idPhoto", body, likes, "replyId", "timeCreated") FROM stdin;
1	1	1	test comment 1	0	0	1537776101
2	1	1	test comment 2	0	0	1537776151
3	1	1	test comment 3	0	0	1537776171
4	1	2	test comment 1 tururu	1	0	1537776101
5	1	3	test comment 1 tururu tratatata	2	0	1537776501
\.


--
-- Data for Name: Followings; Type: TABLE DATA; Schema: public; Owner: kubitre
--

COPY public."Followings" (id, "idWhoFollow", "idWhichFollow") FROM stdin;
\.


--
-- Data for Name: Likes; Type: TABLE DATA; Schema: public; Owner: kubitre
--

COPY public."Likes" (id, "idOwner", "idPhoto", "timeCreated") FROM stdin;
\.


--
-- Data for Name: Photos; Type: TABLE DATA; Schema: public; Owner: kubitre
--

COPY public."Photos" (id, "idOwner", path, body, alt, likes, "timeCreated") FROM stdin;
1	1	https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&resize=1100x1100	meow	cat	1	1537774844
2	1	https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg	murrrr	cat beautiful	2	1537775044
3	1	https://cdn.cnn.com/cnnnext/dam/assets/150324154010-04-internet-cats-restricted-super-169.jpg	black and white!	nice cat	1	1537775244
4	1	https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg	black and white!	nice cat	2	15123125244
5	1	https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg	so cool!!!!	nice cat	1	15123125244
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: kubitre
--

COPY public."Users" (id, username, "userImage", email, password, "timeCreated") FROM stdin;
1	kubitre	https://png.pngtree.com/element_origin_min_pic/16/10/28/ac3ce995048c3a29ae1428f33ee132b2.jpg	kubitre@outlook.com	test1234	1537774651
\.


--
-- Data for Name: __EFMigrationsHistory; Type: TABLE DATA; Schema: public; Owner: kubitre
--

COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
20180924073245_InitialCreate	2.1.3-rtm-32065
\.


--
-- Name: Comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kubitre
--

SELECT pg_catalog.setval('public."Comments_id_seq"', 5, true);


--
-- Name: Followings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kubitre
--

SELECT pg_catalog.setval('public."Followings_id_seq"', 1, false);


--
-- Name: Likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kubitre
--

SELECT pg_catalog.setval('public."Likes_id_seq"', 1, false);


--
-- Name: Photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kubitre
--

SELECT pg_catalog.setval('public."Photos_id_seq"', 5, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kubitre
--

SELECT pg_catalog.setval('public."Users_id_seq"', 1, true);


--
-- Name: Comments PK_Comments; Type: CONSTRAINT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "PK_Comments" PRIMARY KEY (id);


--
-- Name: Followings PK_Followings; Type: CONSTRAINT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Followings"
    ADD CONSTRAINT "PK_Followings" PRIMARY KEY (id);


--
-- Name: Likes PK_Likes; Type: CONSTRAINT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Likes"
    ADD CONSTRAINT "PK_Likes" PRIMARY KEY (id);


--
-- Name: Photos PK_Photos; Type: CONSTRAINT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Photos"
    ADD CONSTRAINT "PK_Photos" PRIMARY KEY (id);


--
-- Name: Users PK_Users; Type: CONSTRAINT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "PK_Users" PRIMARY KEY (id);


--
-- Name: __EFMigrationsHistory PK___EFMigrationsHistory; Type: CONSTRAINT; Schema: public; Owner: kubitre
--

ALTER TABLE ONLY public."__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");


--
-- PostgreSQL database dump complete
--

