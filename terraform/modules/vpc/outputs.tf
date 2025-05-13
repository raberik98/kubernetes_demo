output "vpc_id" {
  value = aws_vpc.main.id
}

output "vpc_cidr_block" {
  value = aws_vpc.main.cidr_block
}

output "public_subnet_id" {
  value = aws_subnet.public.id
}

output "public_subnet_cidr_block" {
  value = aws_subnet.public.cidr_block
}

output "private_subnet_id" {
  value = aws_subnet.private.id
}

output "private_subnet_cidr_block" {
  value = aws_subnet.private.cidr_block
}

output "private_db_subnet_ids" {
  value = [
    aws_subnet.private_db_a.id,
    aws_subnet.private_db_b.id,
    aws_subnet.private_db_c.id
  ]
}

output "private_db_subnet_cidr_blocks" {
  value = [
    aws_subnet.private_db_a.cidr_block,
    aws_subnet.private_db_b.cidr_block,
    aws_subnet.private_db_c.cidr_block
  ]
}

