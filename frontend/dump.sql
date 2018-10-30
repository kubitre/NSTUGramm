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
