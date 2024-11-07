DO $$ BEGIN
 CREATE TYPE "public"."transaction_type" AS ENUM('credit', 'debt');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."payment" AS ENUM('cash', 'credit', 'mpesa');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('active', 'deleted', 'suspended');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "business_types" (
	"business_type_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"business_type_name" varchar(256) NOT NULL,
	"status" "status"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cateories" (
	"category_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"category_name" varchar(256) NOT NULL,
	"category_description" text,
	"status" "status"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "credit_and_debt" (
	"credit_and_debt_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"sales_id" uuid,
	"transaction_date" date,
	"customer_id" uuid,
	"transaction_amount" numeric(10, 2),
	"transaction_type" "transaction_type"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customers" (
	"customer_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"full_name" varchar(256) NOT NULL,
	"status" "status",
	"kra_pin" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "error_logs" (
	"error_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"error_message" text,
	"timestamp" timestamp DEFAULT now(),
	"params" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expenses" (
	"expense_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"expense_amount" numeric(10, 2),
	"expense_recipient" varchar(256),
	"expense_reference" varchar(256),
	"expense_description" text,
	"payment_date" date,
	"status" "status"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "inventory" (
	"inventory_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"item_id" uuid,
	"quantity_added" integer,
	"quantity_stocked" integer DEFAULT 0 NOT NULL,
	"unit_price" numeric(10, 2),
	"selling_price" numeric(10, 2),
	"last_updated" date,
	"status" "status"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "items" (
	"item_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"item_name" varchar(256) NOT NULL,
	"category_id" uuid,
	"reorder_level" integer,
	"status" "status"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payments" (
	"payment_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"transaction_id" uuid,
	"payment_amount" numeric(10, 2),
	"payment_date" date,
	"status" "status"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales" (
	"sales_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"sales_date" date,
	"status" "status",
	"payment" "payment",
	"totalCost" numeric(10, 2),
	"customer_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales_items" (
	"sales_item_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"sales_id" uuid,
	"item_id" uuid,
	"inventory_id" uuid,
	"sales_quantity" integer,
	"unit_price" numeric(10, 2),
	"total_price" numeric(10, 2),
	"status" "status"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(256) NOT NULL,
	"traveller_phone" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"business_name" varchar(256) NOT NULL,
	"business_type_id" uuid,
	"business_location" varchar(256) NOT NULL,
	"date_joined" date,
	"status" "status"
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cateories" ADD CONSTRAINT "cateories_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "credit_and_debt" ADD CONSTRAINT "credit_and_debt_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "credit_and_debt" ADD CONSTRAINT "credit_and_debt_sales_id_sales_sales_id_fk" FOREIGN KEY ("sales_id") REFERENCES "public"."sales"("sales_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "credit_and_debt" ADD CONSTRAINT "credit_and_debt_customer_id_customers_customer_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("customer_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customers" ADD CONSTRAINT "customers_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expenses" ADD CONSTRAINT "expenses_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "inventory" ADD CONSTRAINT "inventory_item_id_items_item_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("item_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "items" ADD CONSTRAINT "items_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "items" ADD CONSTRAINT "items_category_id_cateories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."cateories"("category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payments" ADD CONSTRAINT "payments_transaction_id_credit_and_debt_credit_and_debt_id_fk" FOREIGN KEY ("transaction_id") REFERENCES "public"."credit_and_debt"("credit_and_debt_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales" ADD CONSTRAINT "sales_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales" ADD CONSTRAINT "sales_customer_id_customers_customer_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("customer_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales_items" ADD CONSTRAINT "sales_items_sales_id_sales_sales_id_fk" FOREIGN KEY ("sales_id") REFERENCES "public"."sales"("sales_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales_items" ADD CONSTRAINT "sales_items_item_id_items_item_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("item_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sales_items" ADD CONSTRAINT "sales_items_inventory_id_inventory_inventory_id_fk" FOREIGN KEY ("inventory_id") REFERENCES "public"."inventory"("inventory_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_business_type_id_business_types_business_type_id_fk" FOREIGN KEY ("business_type_id") REFERENCES "public"."business_types"("business_type_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
