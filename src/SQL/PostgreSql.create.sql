




CREATE TABLE Оператор (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 НомерПаспорта INT NULL,
 ID INT NULL,
 СерияПаспорта INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Покупатель (
 primaryKey UUID NOT NULL,
 ДатРожд TIMESTAMP(3) NULL,
 ФИО VARCHAR(255) NULL,
 ID INT NULL,
 НомерПаспорта INT NULL,
 ЭлПочта VARCHAR(255) NULL,
 БанкСчет INT NULL,
 СерияПаспорта INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE БилетКасса (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Маршрут (
 primaryKey UUID NOT NULL,
 НомерМаршрута INT NULL,
 Стоимость INT NULL,
 ВремяОтправ VARCHAR(255) NULL,
 ВремяПрибыт VARCHAR(255) NULL,
 КонечПункт VARCHAR(255) NULL,
 Перевозчик UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПокупкаБилета (
 primaryKey UUID NOT NULL,
 ВремяПокупки VARCHAR(255) NULL,
 ДатаПокупки TIMESTAMP(3) NULL,
 ВарПолучБилет VARCHAR(20) NULL,
 Покупатель UUID NOT NULL,
 БилетКасса UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Информация (
 primaryKey UUID NOT NULL,
 ДатаПоезд TIMESTAMP(3) NULL,
 Место INT NULL,
 Маршрут UUID NOT NULL,
 ПокупкаБилета UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Перевозчик (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Обслуживание (
 primaryKey UUID NOT NULL,
 ЧекЛента BOOLEAN NULL,
 ГотовКРаботе BOOLEAN NULL,
 ВремяПроверки VARCHAR(255) NULL,
 БилетКасса UUID NOT NULL,
 Оператор UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Маршрут ADD CONSTRAINT FK1f700a78e866b992a600b859d6133a96d658bfa0 FOREIGN KEY (Перевозчик) REFERENCES Перевозчик; 
CREATE INDEX Index1f700a78e866b992a600b859d6133a96d658bfa0 on Маршрут (Перевозчик); 

 ALTER TABLE ПокупкаБилета ADD CONSTRAINT FK0d61acab3d422c47721e1ae739862bfd7d958709 FOREIGN KEY (Покупатель) REFERENCES Покупатель; 
CREATE INDEX Index0d61acab3d422c47721e1ae739862bfd7d958709 on ПокупкаБилета (Покупатель); 

 ALTER TABLE ПокупкаБилета ADD CONSTRAINT FKf27e260f90f3226f839c85c24ba60f98926e0594 FOREIGN KEY (БилетКасса) REFERENCES БилетКасса; 
CREATE INDEX Indexf27e260f90f3226f839c85c24ba60f98926e0594 on ПокупкаБилета (БилетКасса); 

 ALTER TABLE Информация ADD CONSTRAINT FKd29b69594a5cd77a761884adec9b3fcd42554367 FOREIGN KEY (Маршрут) REFERENCES Маршрут; 
CREATE INDEX Indexd29b69594a5cd77a761884adec9b3fcd42554367 on Информация (Маршрут); 

 ALTER TABLE Информация ADD CONSTRAINT FK8fc6eafcecde6f78f6e3f18c7a1fbb2f9320d2f6 FOREIGN KEY (ПокупкаБилета) REFERENCES ПокупкаБилета; 
CREATE INDEX Index8fc6eafcecde6f78f6e3f18c7a1fbb2f9320d2f6 on Информация (ПокупкаБилета); 

 ALTER TABLE Обслуживание ADD CONSTRAINT FK1c96adc0277abb48a5efeaf82bf67fa4e035f027 FOREIGN KEY (БилетКасса) REFERENCES БилетКасса; 
CREATE INDEX Index1c96adc0277abb48a5efeaf82bf67fa4e035f027 on Обслуживание (БилетКасса); 

 ALTER TABLE Обслуживание ADD CONSTRAINT FKec738dc9179d4c5d8a10b26bf5d23e2047e48d3d FOREIGN KEY (Оператор) REFERENCES Оператор; 
CREATE INDEX Indexec738dc9179d4c5d8a10b26bf5d23e2047e48d3d on Обслуживание (Оператор); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

