



CREATE TABLE "Оператор"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"НомерПаспорта" NUMBER(10) NULL,

	"ID" NUMBER(10) NULL,

	"СерияПаспорта" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Покупатель"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатРожд" DATE NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ID" NUMBER(10) NULL,

	"НомерПаспорта" NUMBER(10) NULL,

	"ЭлПочта" NVARCHAR2(255) NULL,

	"БанкСчет" NUMBER(10) NULL,

	"СерияПаспорта" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "БилетКасса"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Маршрут"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерМаршрута" NUMBER(10) NULL,

	"Стоимость" NUMBER(10) NULL,

	"ВремяОтправ" NVARCHAR2(255) NULL,

	"ВремяПрибыт" NVARCHAR2(255) NULL,

	"КонечПункт" NVARCHAR2(255) NULL,

	"Перевозчик" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПокупкаБилета"
(

	"primaryKey" RAW(16) NOT NULL,

	"ВремяПокупки" NVARCHAR2(255) NULL,

	"ДатаПокупки" DATE NULL,

	"ВарПолучБилет" NVARCHAR2(20) NULL,

	"Покупатель" RAW(16) NOT NULL,

	"БилетКасса" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Информация"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаПоезд" DATE NULL,

	"Место" NUMBER(10) NULL,

	"Маршрут" RAW(16) NOT NULL,

	"ПокупкаБилета" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Перевозчик"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Обслуживание"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЧекЛента" NUMBER(1) NULL,

	"ГотовКРаботе" NUMBER(1) NULL,

	"ВремяПроверки" NVARCHAR2(255) NULL,

	"БилетКасса" RAW(16) NOT NULL,

	"Оператор" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Маршрут"
	ADD CONSTRAINT "Маршрут_FПере_3857" FOREIGN KEY ("Перевозчик") REFERENCES "Перевозчик" ("primaryKey");

CREATE INDEX "Маршрут_IПере_3852" on "Маршрут" ("Перевозчик");

ALTER TABLE "ПокупкаБилета"
	ADD CONSTRAINT "ПокупкаБилета_590" FOREIGN KEY ("Покупатель") REFERENCES "Покупатель" ("primaryKey");

CREATE INDEX "ПокупкаБилета_683" on "ПокупкаБилета" ("Покупатель");

ALTER TABLE "ПокупкаБилета"
	ADD CONSTRAINT "ПокупкаБилет_9746" FOREIGN KEY ("БилетКасса") REFERENCES "БилетКасса" ("primaryKey");

CREATE INDEX "ПокупкаБилет_8333" on "ПокупкаБилета" ("БилетКасса");

ALTER TABLE "Информация"
	ADD CONSTRAINT "Информация_FМ_2582" FOREIGN KEY ("Маршрут") REFERENCES "Маршрут" ("primaryKey");

CREATE INDEX "Информация_IМ_5499" on "Информация" ("Маршрут");

ALTER TABLE "Информация"
	ADD CONSTRAINT "Информация_FПо_889" FOREIGN KEY ("ПокупкаБилета") REFERENCES "ПокупкаБилета" ("primaryKey");

CREATE INDEX "Информация_IП_1545" on "Информация" ("ПокупкаБилета");

ALTER TABLE "Обслуживание"
	ADD CONSTRAINT "Обслуживание__1284" FOREIGN KEY ("БилетКасса") REFERENCES "БилетКасса" ("primaryKey");

CREATE INDEX "Обслуживание__2076" on "Обслуживание" ("БилетКасса");

ALTER TABLE "Обслуживание"
	ADD CONSTRAINT "Обслуживание__6229" FOREIGN KEY ("Оператор") REFERENCES "Оператор" ("primaryKey");

CREATE INDEX "Обслуживание__4868" on "Обслуживание" ("Оператор");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


