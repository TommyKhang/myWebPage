--------------------------------------------------------
--  File created - Saturday-November-16-2024   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table ADDRESS
--------------------------------------------------------

  CREATE TABLE "C##HITO"."ADDRESS" 
   (	"ADDRESSID" NUMBER(*,0), 
	"UNIT_NUMBER" NUMBER(*,0), 
	"STREET_NUMBER" NUMBER(*,0), 
	"ADDRESS_LINE1" VARCHAR2(255 BYTE), 
	"CITY" VARCHAR2(255 BYTE), 
	"ADDRESS_LINE2" VARCHAR2(255 BYTE), 
	"REGION" VARCHAR2(255 BYTE), 
	"POSTAL_CODE" NUMBER(*,0), 
	"COUNTRYID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table COUNTRY
--------------------------------------------------------

  CREATE TABLE "C##HITO"."COUNTRY" 
   (	"COUNTRYID" NUMBER(*,0), 
	"COUNTRY_NAME" VARCHAR2(255 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table LOGIN
--------------------------------------------------------

  CREATE TABLE "C##HITO"."LOGIN" 
   (	"LOGINID" NUMBER(*,0), 
	"USER_LOGIN_NAME" VARCHAR2(255 BYTE), 
	"USER_PASSWORD" VARCHAR2(255 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table ORDER_LINE
--------------------------------------------------------

  CREATE TABLE "C##HITO"."ORDER_LINE" 
   (	"ORDERLINEID" NUMBER(*,0), 
	"QUANTITY" NUMBER(*,0), 
	"PRICE" FLOAT(126), 
	"SHOPORDERID" NUMBER(*,0), 
	"PRODUCTITEMID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table ORDER_STATUS
--------------------------------------------------------

  CREATE TABLE "C##HITO"."ORDER_STATUS" 
   (	"ORDERSTATUSID" NUMBER(*,0), 
	"STATUS" CHAR(125 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PAYMENT_TYPE
--------------------------------------------------------

  CREATE TABLE "C##HITO"."PAYMENT_TYPE" 
   (	"PAYMENTTYPEID" NUMBER(*,0), 
	"VALUE" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PRODUCT
--------------------------------------------------------

  CREATE TABLE "C##HITO"."PRODUCT" 
   (	"PRODUCTID" NUMBER(*,0), 
	"PRODUCTNAME" VARCHAR2(255 BYTE), 
	"PRODUCTIMAGE" VARCHAR2(255 BYTE), 
	"PRODUCTDESCRIPTION" VARCHAR2(255 BYTE), 
	"PRODUCTCATEGORYID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PRODUCT_CATEGORY
--------------------------------------------------------

  CREATE TABLE "C##HITO"."PRODUCT_CATEGORY" 
   (	"PRODUCTCATEGORYID" NUMBER(*,0), 
	"CATEGORYNAME" VARCHAR2(255 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PRODUCT_ITEM
--------------------------------------------------------

  CREATE TABLE "C##HITO"."PRODUCT_ITEM" 
   (	"PRODUCTITEMID" NUMBER(*,0), 
	"SKU" VARCHAR2(150 BYTE), 
	"QUANTITYINSTOCK" NUMBER(*,0), 
	"PRODUCTIMAGE" VARCHAR2(255 BYTE), 
	"PRICE" FLOAT(126), 
	"PRODUCTID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PRODUCTCATEGORY_PROMOTION
--------------------------------------------------------

  CREATE TABLE "C##HITO"."PRODUCTCATEGORY_PROMOTION" 
   (	"PRODUCTCATEGORYID" NUMBER(*,0), 
	"PROMOTIONID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PROMOTION
--------------------------------------------------------

  CREATE TABLE "C##HITO"."PROMOTION" 
   (	"PROMOTIONID" NUMBER(*,0), 
	"NAME" VARCHAR2(255 BYTE), 
	"DESCRIPTION" VARCHAR2(255 BYTE), 
	"DISCOUNTRATE" FLOAT(126), 
	"START_DATE" DATE, 
	"END_DATE" DATE
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table ROLES
--------------------------------------------------------

  CREATE TABLE "C##HITO"."ROLES" 
   (	"ROLEID" NUMBER(*,0), 
	"ROLE_NAME" VARCHAR2(255 BYTE), 
	"ROLE_DESCRIPTION" VARCHAR2(255 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table SHIPPING_METHOD
--------------------------------------------------------

  CREATE TABLE "C##HITO"."SHIPPING_METHOD" 
   (	"SHIPPINGMETHODID" NUMBER(*,0), 
	"NAME" VARCHAR2(255 BYTE), 
	"PRICE" FLOAT(126)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table SHOP_ORDER
--------------------------------------------------------

  CREATE TABLE "C##HITO"."SHOP_ORDER" 
   (	"SHOPORDERID" NUMBER(*,0), 
	"ORDER_TOTAL" FLOAT(126), 
	"ORDER_DATE" DATE, 
	"SHIPPINGMETHODID" NUMBER(*,0), 
	"ORDERSTATUSID" NUMBER(*,0), 
	"ADDRESSID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table SHOPPING_CART
--------------------------------------------------------

  CREATE TABLE "C##HITO"."SHOPPING_CART" 
   (	"SHOPPINGCARTID" NUMBER(*,0), 
	"USERID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table SHOPPING_CART_ITEM
--------------------------------------------------------

  CREATE TABLE "C##HITO"."SHOPPING_CART_ITEM" 
   (	"SHOPPINGCARTITEMID" NUMBER(*,0), 
	"QUANTITY" NUMBER(*,0), 
	"SHOPPINGCARTID" NUMBER(*,0), 
	"PRODUCTITEMID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table SITE_USER
--------------------------------------------------------

  CREATE TABLE "C##HITO"."SITE_USER" 
   (	"USERID" NUMBER(*,0), 
	"EMAIL_ADDRESS" VARCHAR2(255 BYTE), 
	"PHONE_NUMBER" NUMBER(*,0), 
	"USER_PASSWORD" VARCHAR2(255 BYTE), 
	"LOGINID" NUMBER(*,0), 
	"ROLEID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table USER_ADDESS
--------------------------------------------------------

  CREATE TABLE "C##HITO"."USER_ADDESS" 
   (	"USERID" NUMBER(*,0), 
	"ADDRESSID" NUMBER(*,0), 
	"IS_DEFAULT" CHAR(10 BYTE)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table USER_PAYMENT_METHOD
--------------------------------------------------------

  CREATE TABLE "C##HITO"."USER_PAYMENT_METHOD" 
   (	"USERPAYMENTMETHODID" NUMBER(*,0), 
	"ACCOUNT_NUMBER" NUMBER(*,0), 
	"EXPIRY_DATE" DATE, 
	"IS_DEFAULT" CHAR(10 BYTE), 
	"PROVIDER" VARCHAR2(255 BYTE), 
	"USERID" NUMBER(*,0), 
	"PAYMENTTYPEID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table USER_REVIEW
--------------------------------------------------------

  CREATE TABLE "C##HITO"."USER_REVIEW" 
   (	"USERREVIEWID" NUMBER(*,0), 
	"RATING_VALUE" NUMBER(*,0), 
	"USER_COMMENT" VARCHAR2(255 BYTE), 
	"USERID" NUMBER(*,0), 
	"ORDERLINEID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table VARIATION
--------------------------------------------------------

  CREATE TABLE "C##HITO"."VARIATION" 
   (	"VARIATIONID" NUMBER(*,0), 
	"VARIATIONNAME" VARCHAR2(255 BYTE), 
	"PRODUCTCATEGORYID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table VARIATION_OPTION
--------------------------------------------------------

  CREATE TABLE "C##HITO"."VARIATION_OPTION" 
   (	"VARIATIONOPTIONID" NUMBER(*,0), 
	"VALUE" FLOAT(126), 
	"VARIATIONID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table VARIATIONOPTION_PRODUCTITEM
--------------------------------------------------------

  CREATE TABLE "C##HITO"."VARIATIONOPTION_PRODUCTITEM" 
   (	"VARIATIONOPTIONID" NUMBER(*,0), 
	"PRODUCTITEMID" NUMBER(*,0)
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
REM INSERTING into C##HITO.ADDRESS
SET DEFINE OFF;
REM INSERTING into C##HITO.COUNTRY
SET DEFINE OFF;
REM INSERTING into C##HITO.LOGIN
SET DEFINE OFF;
REM INSERTING into C##HITO.ORDER_LINE
SET DEFINE OFF;
REM INSERTING into C##HITO.ORDER_STATUS
SET DEFINE OFF;
REM INSERTING into C##HITO.PAYMENT_TYPE
SET DEFINE OFF;
REM INSERTING into C##HITO.PRODUCT
SET DEFINE OFF;
REM INSERTING into C##HITO.PRODUCT_CATEGORY
SET DEFINE OFF;
REM INSERTING into C##HITO.PRODUCT_ITEM
SET DEFINE OFF;
REM INSERTING into C##HITO.PRODUCTCATEGORY_PROMOTION
SET DEFINE OFF;
REM INSERTING into C##HITO.PROMOTION
SET DEFINE OFF;
REM INSERTING into C##HITO.ROLES
SET DEFINE OFF;
REM INSERTING into C##HITO.SHIPPING_METHOD
SET DEFINE OFF;
REM INSERTING into C##HITO.SHOP_ORDER
SET DEFINE OFF;
REM INSERTING into C##HITO.SHOPPING_CART
SET DEFINE OFF;
REM INSERTING into C##HITO.SHOPPING_CART_ITEM
SET DEFINE OFF;
REM INSERTING into C##HITO.SITE_USER
SET DEFINE OFF;
REM INSERTING into C##HITO.USER_ADDESS
SET DEFINE OFF;
REM INSERTING into C##HITO.USER_PAYMENT_METHOD
SET DEFINE OFF;
REM INSERTING into C##HITO.USER_REVIEW
SET DEFINE OFF;
REM INSERTING into C##HITO.VARIATION
SET DEFINE OFF;
REM INSERTING into C##HITO.VARIATION_OPTION
SET DEFINE OFF;
REM INSERTING into C##HITO.VARIATIONOPTION_PRODUCTITEM
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index SYS_C008357
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008357" ON "C##HITO"."ADDRESS" ("ADDRESSID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008341
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008341" ON "C##HITO"."COUNTRY" ("COUNTRYID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008321
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008321" ON "C##HITO"."LOGIN" ("LOGINID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008375
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008375" ON "C##HITO"."ORDER_LINE" ("ORDERLINEID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008386
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008386" ON "C##HITO"."ORDER_STATUS" ("ORDERSTATUSID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008369
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008369" ON "C##HITO"."PAYMENT_TYPE" ("PAYMENTTYPEID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008400
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008400" ON "C##HITO"."PRODUCT" ("PRODUCTID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008417
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008417" ON "C##HITO"."PRODUCT_CATEGORY" ("PRODUCTCATEGORYID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008405
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008405" ON "C##HITO"."PRODUCT_ITEM" ("PRODUCTITEMID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008415
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008415" ON "C##HITO"."PROMOTION" ("PROMOTIONID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008330
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008330" ON "C##HITO"."ROLES" ("ROLEID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008383
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008383" ON "C##HITO"."SHIPPING_METHOD" ("SHIPPINGMETHODID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008390
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008390" ON "C##HITO"."SHOP_ORDER" ("SHOPORDERID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008396
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008396" ON "C##HITO"."SHOPPING_CART" ("SHOPPINGCARTID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008409
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008409" ON "C##HITO"."SHOPPING_CART_ITEM" ("SHOPPINGCARTITEMID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008326
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008326" ON "C##HITO"."SITE_USER" ("USERID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008367
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008367" ON "C##HITO"."USER_PAYMENT_METHOD" ("USERPAYMENTMETHODID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008377
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008377" ON "C##HITO"."USER_REVIEW" ("USERREVIEWID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008422
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008422" ON "C##HITO"."VARIATION" ("VARIATIONID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C008426
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##HITO"."SYS_C008426" ON "C##HITO"."VARIATION_OPTION" ("VARIATIONOPTIONID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  Constraints for Table ADDRESS
--------------------------------------------------------

  ALTER TABLE "C##HITO"."ADDRESS" MODIFY ("ADDRESSID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ADDRESS" MODIFY ("UNIT_NUMBER" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ADDRESS" MODIFY ("ADDRESS_LINE1" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ADDRESS" MODIFY ("CITY" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ADDRESS" MODIFY ("REGION" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ADDRESS" MODIFY ("POSTAL_CODE" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ADDRESS" ADD PRIMARY KEY ("ADDRESSID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table COUNTRY
--------------------------------------------------------

  ALTER TABLE "C##HITO"."COUNTRY" MODIFY ("COUNTRYID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."COUNTRY" MODIFY ("COUNTRY_NAME" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."COUNTRY" ADD PRIMARY KEY ("COUNTRYID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table LOGIN
--------------------------------------------------------

  ALTER TABLE "C##HITO"."LOGIN" MODIFY ("LOGINID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."LOGIN" MODIFY ("USER_LOGIN_NAME" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."LOGIN" MODIFY ("USER_PASSWORD" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."LOGIN" ADD PRIMARY KEY ("LOGINID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table ORDER_LINE
--------------------------------------------------------

  ALTER TABLE "C##HITO"."ORDER_LINE" MODIFY ("ORDERLINEID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ORDER_LINE" MODIFY ("QUANTITY" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ORDER_LINE" MODIFY ("PRICE" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ORDER_LINE" ADD PRIMARY KEY ("ORDERLINEID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table ORDER_STATUS
--------------------------------------------------------

  ALTER TABLE "C##HITO"."ORDER_STATUS" MODIFY ("ORDERSTATUSID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ORDER_STATUS" MODIFY ("STATUS" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ORDER_STATUS" ADD PRIMARY KEY ("ORDERSTATUSID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table PAYMENT_TYPE
--------------------------------------------------------

  ALTER TABLE "C##HITO"."PAYMENT_TYPE" MODIFY ("PAYMENTTYPEID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PAYMENT_TYPE" ADD PRIMARY KEY ("PAYMENTTYPEID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table PRODUCT
--------------------------------------------------------

  ALTER TABLE "C##HITO"."PRODUCT" MODIFY ("PRODUCTID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PRODUCT" MODIFY ("PRODUCTNAME" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PRODUCT" ADD PRIMARY KEY ("PRODUCTID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table PRODUCT_CATEGORY
--------------------------------------------------------

  ALTER TABLE "C##HITO"."PRODUCT_CATEGORY" MODIFY ("PRODUCTCATEGORYID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PRODUCT_CATEGORY" ADD PRIMARY KEY ("PRODUCTCATEGORYID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table PRODUCT_ITEM
--------------------------------------------------------

  ALTER TABLE "C##HITO"."PRODUCT_ITEM" MODIFY ("PRODUCTITEMID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PRODUCT_ITEM" MODIFY ("SKU" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PRODUCT_ITEM" MODIFY ("QUANTITYINSTOCK" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PRODUCT_ITEM" MODIFY ("PRICE" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PRODUCT_ITEM" ADD PRIMARY KEY ("PRODUCTITEMID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table PROMOTION
--------------------------------------------------------

  ALTER TABLE "C##HITO"."PROMOTION" MODIFY ("PROMOTIONID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PROMOTION" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PROMOTION" MODIFY ("DISCOUNTRATE" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."PROMOTION" ADD PRIMARY KEY ("PROMOTIONID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table ROLES
--------------------------------------------------------

  ALTER TABLE "C##HITO"."ROLES" MODIFY ("ROLEID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ROLES" MODIFY ("ROLE_NAME" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."ROLES" ADD PRIMARY KEY ("ROLEID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SHIPPING_METHOD
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SHIPPING_METHOD" MODIFY ("SHIPPINGMETHODID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SHIPPING_METHOD" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SHIPPING_METHOD" MODIFY ("PRICE" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SHIPPING_METHOD" ADD PRIMARY KEY ("SHIPPINGMETHODID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SHOP_ORDER
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SHOP_ORDER" MODIFY ("SHOPORDERID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SHOP_ORDER" MODIFY ("ORDER_TOTAL" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SHOP_ORDER" MODIFY ("ORDER_DATE" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SHOP_ORDER" ADD PRIMARY KEY ("SHOPORDERID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SHOPPING_CART
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SHOPPING_CART" MODIFY ("SHOPPINGCARTID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SHOPPING_CART" ADD PRIMARY KEY ("SHOPPINGCARTID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SHOPPING_CART_ITEM
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SHOPPING_CART_ITEM" MODIFY ("SHOPPINGCARTITEMID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SHOPPING_CART_ITEM" ADD PRIMARY KEY ("SHOPPINGCARTITEMID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table SITE_USER
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SITE_USER" MODIFY ("USERID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SITE_USER" MODIFY ("EMAIL_ADDRESS" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SITE_USER" MODIFY ("PHONE_NUMBER" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SITE_USER" MODIFY ("USER_PASSWORD" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."SITE_USER" ADD PRIMARY KEY ("USERID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table USER_PAYMENT_METHOD
--------------------------------------------------------

  ALTER TABLE "C##HITO"."USER_PAYMENT_METHOD" MODIFY ("USERPAYMENTMETHODID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."USER_PAYMENT_METHOD" MODIFY ("ACCOUNT_NUMBER" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."USER_PAYMENT_METHOD" MODIFY ("EXPIRY_DATE" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."USER_PAYMENT_METHOD" MODIFY ("PROVIDER" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."USER_PAYMENT_METHOD" ADD PRIMARY KEY ("USERPAYMENTMETHODID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table USER_REVIEW
--------------------------------------------------------

  ALTER TABLE "C##HITO"."USER_REVIEW" MODIFY ("USERREVIEWID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."USER_REVIEW" ADD PRIMARY KEY ("USERREVIEWID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table VARIATION
--------------------------------------------------------

  ALTER TABLE "C##HITO"."VARIATION" MODIFY ("VARIATIONID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."VARIATION" ADD PRIMARY KEY ("VARIATIONID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table VARIATION_OPTION
--------------------------------------------------------

  ALTER TABLE "C##HITO"."VARIATION_OPTION" MODIFY ("VARIATIONOPTIONID" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."VARIATION_OPTION" MODIFY ("VALUE" NOT NULL ENABLE);
  ALTER TABLE "C##HITO"."VARIATION_OPTION" ADD PRIMARY KEY ("VARIATIONOPTIONID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table ADDRESS
--------------------------------------------------------

  ALTER TABLE "C##HITO"."ADDRESS" ADD FOREIGN KEY ("COUNTRYID")
	  REFERENCES "C##HITO"."COUNTRY" ("COUNTRYID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table ORDER_LINE
--------------------------------------------------------

  ALTER TABLE "C##HITO"."ORDER_LINE" ADD FOREIGN KEY ("SHOPORDERID")
	  REFERENCES "C##HITO"."SHOP_ORDER" ("SHOPORDERID") ENABLE;
  ALTER TABLE "C##HITO"."ORDER_LINE" ADD FOREIGN KEY ("PRODUCTITEMID")
	  REFERENCES "C##HITO"."PRODUCT_ITEM" ("PRODUCTITEMID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table PRODUCT
--------------------------------------------------------

  ALTER TABLE "C##HITO"."PRODUCT" ADD FOREIGN KEY ("PRODUCTCATEGORYID")
	  REFERENCES "C##HITO"."PRODUCT_CATEGORY" ("PRODUCTCATEGORYID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table PRODUCT_ITEM
--------------------------------------------------------

  ALTER TABLE "C##HITO"."PRODUCT_ITEM" ADD FOREIGN KEY ("PRODUCTID")
	  REFERENCES "C##HITO"."PRODUCT" ("PRODUCTID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table PRODUCTCATEGORY_PROMOTION
--------------------------------------------------------

  ALTER TABLE "C##HITO"."PRODUCTCATEGORY_PROMOTION" ADD FOREIGN KEY ("PRODUCTCATEGORYID")
	  REFERENCES "C##HITO"."PRODUCT_CATEGORY" ("PRODUCTCATEGORYID") ENABLE;
  ALTER TABLE "C##HITO"."PRODUCTCATEGORY_PROMOTION" ADD FOREIGN KEY ("PROMOTIONID")
	  REFERENCES "C##HITO"."PROMOTION" ("PROMOTIONID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SHOP_ORDER
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SHOP_ORDER" ADD FOREIGN KEY ("ADDRESSID")
	  REFERENCES "C##HITO"."ADDRESS" ("ADDRESSID") ENABLE;
  ALTER TABLE "C##HITO"."SHOP_ORDER" ADD FOREIGN KEY ("SHIPPINGMETHODID")
	  REFERENCES "C##HITO"."SHIPPING_METHOD" ("SHIPPINGMETHODID") ENABLE;
  ALTER TABLE "C##HITO"."SHOP_ORDER" ADD FOREIGN KEY ("ORDERSTATUSID")
	  REFERENCES "C##HITO"."ORDER_STATUS" ("ORDERSTATUSID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SHOPPING_CART
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SHOPPING_CART" ADD FOREIGN KEY ("USERID")
	  REFERENCES "C##HITO"."SITE_USER" ("USERID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SHOPPING_CART_ITEM
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SHOPPING_CART_ITEM" ADD FOREIGN KEY ("SHOPPINGCARTID")
	  REFERENCES "C##HITO"."SHOPPING_CART" ("SHOPPINGCARTID") ENABLE;
  ALTER TABLE "C##HITO"."SHOPPING_CART_ITEM" ADD FOREIGN KEY ("PRODUCTITEMID")
	  REFERENCES "C##HITO"."PRODUCT_ITEM" ("PRODUCTITEMID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SITE_USER
--------------------------------------------------------

  ALTER TABLE "C##HITO"."SITE_USER" ADD FOREIGN KEY ("LOGINID")
	  REFERENCES "C##HITO"."LOGIN" ("LOGINID") ENABLE;
  ALTER TABLE "C##HITO"."SITE_USER" ADD FOREIGN KEY ("ROLEID")
	  REFERENCES "C##HITO"."ROLES" ("ROLEID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table USER_ADDESS
--------------------------------------------------------

  ALTER TABLE "C##HITO"."USER_ADDESS" ADD FOREIGN KEY ("USERID")
	  REFERENCES "C##HITO"."SITE_USER" ("USERID") ENABLE;
  ALTER TABLE "C##HITO"."USER_ADDESS" ADD FOREIGN KEY ("ADDRESSID")
	  REFERENCES "C##HITO"."ADDRESS" ("ADDRESSID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table USER_PAYMENT_METHOD
--------------------------------------------------------

  ALTER TABLE "C##HITO"."USER_PAYMENT_METHOD" ADD FOREIGN KEY ("USERID")
	  REFERENCES "C##HITO"."SITE_USER" ("USERID") ENABLE;
  ALTER TABLE "C##HITO"."USER_PAYMENT_METHOD" ADD FOREIGN KEY ("PAYMENTTYPEID")
	  REFERENCES "C##HITO"."PAYMENT_TYPE" ("PAYMENTTYPEID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table USER_REVIEW
--------------------------------------------------------

  ALTER TABLE "C##HITO"."USER_REVIEW" ADD FOREIGN KEY ("USERID")
	  REFERENCES "C##HITO"."SITE_USER" ("USERID") ENABLE;
  ALTER TABLE "C##HITO"."USER_REVIEW" ADD FOREIGN KEY ("ORDERLINEID")
	  REFERENCES "C##HITO"."ORDER_LINE" ("ORDERLINEID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table VARIATION
--------------------------------------------------------

  ALTER TABLE "C##HITO"."VARIATION" ADD FOREIGN KEY ("PRODUCTCATEGORYID")
	  REFERENCES "C##HITO"."PRODUCT_CATEGORY" ("PRODUCTCATEGORYID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table VARIATION_OPTION
--------------------------------------------------------

  ALTER TABLE "C##HITO"."VARIATION_OPTION" ADD FOREIGN KEY ("VARIATIONID")
	  REFERENCES "C##HITO"."VARIATION" ("VARIATIONID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table VARIATIONOPTION_PRODUCTITEM
--------------------------------------------------------

  ALTER TABLE "C##HITO"."VARIATIONOPTION_PRODUCTITEM" ADD FOREIGN KEY ("VARIATIONOPTIONID")
	  REFERENCES "C##HITO"."VARIATION_OPTION" ("VARIATIONOPTIONID") ENABLE;
  ALTER TABLE "C##HITO"."VARIATIONOPTION_PRODUCTITEM" ADD FOREIGN KEY ("PRODUCTITEMID")
	  REFERENCES "C##HITO"."PRODUCT_ITEM" ("PRODUCTITEMID") ENABLE;
