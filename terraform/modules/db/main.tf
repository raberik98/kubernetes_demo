
module "rds" {
  source = "./modules/rds"

  vpc_cidr_block = var.vpc_cidr_block
  subnet_ids = var.subnet_ids
  vpc_id = var.vpc_id

  tag_name = var.tag_name
}