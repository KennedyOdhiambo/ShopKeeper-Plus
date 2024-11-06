ALTER TABLE "cateories" RENAME TO "categories";--> statement-breakpoint
ALTER TABLE "categories" DROP CONSTRAINT "cateories_user_id_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "items" DROP CONSTRAINT "items_category_id_cateories_category_id_fk";
--> statement-breakpoint
ALTER TABLE "customers" ALTER COLUMN "customer_contact" DROP NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories" ADD CONSTRAINT "categories_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "items" ADD CONSTRAINT "items_category_id_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
