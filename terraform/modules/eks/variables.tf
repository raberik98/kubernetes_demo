variable "vpc_id" {
  type = string
}

variable "public_subnet_id" {
  type = string
}

variable "private_subnet_id" {
  type = string
}



variable "project_name" {
  type = string
}

variable "aws_region" {
  type = string
}

variable "aws_cli_profile" {
  type = string
}

variable "configure_kubectl" {
  type = bool
  default = true
}